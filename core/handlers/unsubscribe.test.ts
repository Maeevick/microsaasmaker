
import { UNSUBSCRIBED, NOT_SUBSCRIBED } from "../constants"
import { CryptoGateway, SubscriberData, SubscriberGateway, UnsubscriberData } from "../ports/subscription"
import { unsubscribeCommandHandler } from "./unsubscribe"

describe('Subscription to Newsletter', () => {
    let fakeSubscribersPersistence: SubscriberData[]

    const fakeSubscriberGateway: SubscriberGateway = {
        save: async (data: SubscriberData) => {
            fakeSubscribersPersistence.push(data)
        },
        getAll: async () => fakeSubscribersPersistence,
        remove: async ({ email }: UnsubscriberData) => {
            const targetIndex = fakeSubscribersPersistence.findIndex(sub => sub.email === email)
            if(targetIndex !== -1) fakeSubscribersPersistence.splice(targetIndex, 1)
        }
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

    test(`when the user unsubscribes with existing email, then it's deleted`, async () => {
        fakeSubscribersPersistence = [
            { nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' },
            { nickname: 'Maeevick', email: 'encrypted_existing@domain.ext' },
            { nickname: 'Another', email: 'encrypted_another@test.com' },
        ]
        const fakeSubscriber = { nickname: 'Maeevick', email: 'existing@domain.ext' }

        const sut = await unsubscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ok', message: UNSUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([
            { nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' },
            { nickname: 'Another', email: 'encrypted_another@test.com' },
        ]);
    })

    test(`when the user unsubscribes without existing email, then nothing change`, async () => {
        fakeSubscribersPersistence = [
            { nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' },
            { nickname: 'Another', email: 'encrypted_another@test.com' },
        ]
        const fakeSubscriber = { nickname: 'Maeevick', email: 'unexisting@domain.ext' }

        const sut = await unsubscribeCommandHandler(fakeSubscriberGateway, fakeCryptoGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: NOT_SUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([
            { nickname: 'Aurel', email: 'encrypted_some_email@domain.ext' },
            { nickname: 'Another', email: 'encrypted_another@test.com' },
        ]);
    })
})
