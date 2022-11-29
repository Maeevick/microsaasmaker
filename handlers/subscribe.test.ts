import { subscribeCommandHandler, SubscriberData } from './subscribe'

describe('Subscription to Newsletter', () => {
    test(`when the user fills firstname and email then they are saved as name and email`, async () => {
        const fakeSubscribersPersistence: SubscriberData[] = []

        const fakeSubscriber = { firstname: "Maeevick", email: "some_email@domain.ext" }
        const fakeSubscriberGateway = {
            gateway: {
                save: async (data: SubscriberData) => {
                    fakeSubscribersPersistence.push(data)
                }
            }
        }
        await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(fakeSubscribersPersistence).toEqual([{ name: "Maeevick", email: "some_email@domain.ext" }]);
    });
})
