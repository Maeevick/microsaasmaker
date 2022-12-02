import { NOT_SUBSCRIBED, UNSUBSCRIBED } from "../constants/subscription"
import { SubscriberData, UnsubscriberData } from "./subscription"
import { unsubscribeCommandHandler } from "./unsubscribe"


describe('Subscription to Newsletter', () => {
    let fakeSubscribersPersistence: SubscriberData[]

    const fakeSubscriberGateway = {
        save: async (data: SubscriberData) => {
            fakeSubscribersPersistence.push(data)
        },
        getAll: async () => fakeSubscribersPersistence,
        remove: async ({ email }: UnsubscriberData) => {
            const targetIndex = fakeSubscribersPersistence.findIndex(sub => sub.email === email)
            fakeSubscribersPersistence.splice(targetIndex, 1)
        }
    }

    beforeEach(() => {
        fakeSubscribersPersistence = []
    })

    test(`when the user unsubscribes with existing email, then it's deleted`, async () => {
        fakeSubscribersPersistence = [
            { nickname: 'Aurel', email: 'some_email@domain.ext' },
            { nickname: 'Maeevick', email: 'existing@domain.ext' },
            { nickname: 'Another', email: 'another@test.com' },
        ]
        const fakeSubscriber = { nickname: 'Maeevick', email: 'existing@domain.ext' }

        const sut = await unsubscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ok', message: UNSUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([
            { nickname: 'Aurel', email: 'some_email@domain.ext' },
            { nickname: 'Another', email: 'another@test.com' },
        ]);
    })

    test(`when the user unsubscribes without existing email, then nothing change`, async () => {
        fakeSubscribersPersistence = [
            { nickname: 'Aurel', email: 'some_email@domain.ext' },
            { nickname: 'Another', email: 'another@test.com' },
        ]
        const fakeSubscriber = { nickname: 'Maeevick', email: 'unexisting@domain.ext' }

        const sut = await unsubscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: NOT_SUBSCRIBED })
        expect(fakeSubscribersPersistence).toEqual([
            { nickname: 'Aurel', email: 'some_email@domain.ext' },
            { nickname: 'Another', email: 'another@test.com' },
        ]);
    })
})
