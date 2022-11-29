import { subscribeCommandHandler, SubscriberData } from './subscribe'



describe('Subscription to Newsletter', () => {
    let fakeSubscribersPersistence: SubscriberData[]

    const fakeSubscriberGateway = {
        save: async (data: SubscriberData) => {
            fakeSubscribersPersistence.push(data)
        },
        getAll: async () => fakeSubscribersPersistence,
    }

    beforeEach(() => {
        fakeSubscribersPersistence = []
    })

    test(`when the user fills his/her firstname and email then they are saved as name and email`, async () => {
        const fakeSubscriber = { firstname: "Maeevick", email: "some_email@domain.ext" }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual(undefined)
        expect(fakeSubscribersPersistence).toEqual([{ name: "Maeevick", email: "some_email@domain.ext" }]);
    })

    test(`when the user fills firstname and an already existing email then user is notified that he/she is already registered`, async () => {
        fakeSubscribersPersistence = [{ name: "Aurel", email: "some_email@domain.ext" }]
        const fakeSubscriber = { firstname: "Maeevick", email: "some_email@domain.ext" }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual(Error('already subscribed'))
        expect(fakeSubscribersPersistence).toEqual([{ name: "Aurel", email: "some_email@domain.ext" }])
    })
})
