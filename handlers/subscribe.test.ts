import {
    NEWLY_SUBSCRIBED,
    ALREADY_SUBSCRIBED,
    FIRSTNAME_IS_MISSING,
    EMAIL_IS_MISSING
} from "../constants/subscription"
import { CryptoGateway } from "./crypto"
import { SubscriberData, SubscriberGateway } from "./subscription"
import { subscribeCommandHandler } from "./subscribe"

describe('Subscription to Newsletter', () => {
    let fakeSubscribersPersistence: SubscriberData[]

    const fakeSubscriberGateway: SubscriberGateway = {
        save: async (data: SubscriberData) => {
            fakeSubscribersPersistence.push(data)
        },
        getAll: async () => fakeSubscribersPersistence,
        remove: async () => {}
    }

    const fakeCryptoGateway: CryptoGateway = {
        encryptClearText: (data: string) => {
            return `encrypted_${data}`
        },
        decryptHexText: (data: string) => {
            return data.replace('encrypted_', '')
        }
    }

    beforeEach(() => {
        fakeSubscribersPersistence = []
    })

    test(`when the user fills his/her nickname and email, then they are saved`, async () => {
        const fakeSubscriber = { nickname: 'Maeevick', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ok', message: NEWLY_SUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([{ nickname: 'Maeevick', email: 'encrypted_some_email@domain.ext' }]);
    })

    test(`when the user fills nickname and an already existing email, then he/she is notified that he/she is already registered`, async () => {
        fakeSubscribersPersistence = [{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }]
        const fakeSubscriber = { nickname: 'Maeevick', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ok', message: ALREADY_SUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }])
    })

    test(`when the user's' nickname is missing, then he/she is notified about the error`, async () => {
        fakeSubscribersPersistence = [{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }]
        const fakeSubscriber = { nickname: '', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: FIRSTNAME_IS_MISSING })
        expect(fakeSubscribersPersistence).toEqual([{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }])
    })

    test(`when the user's' email is missing, then he/she is notified about the error`, async () => {
        fakeSubscribersPersistence = [{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }]
        const fakeSubscriber = { nickname: 'Maeevick', email: '' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: EMAIL_IS_MISSING })
        expect(fakeSubscribersPersistence).toEqual([{ nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' }])
    })
})
