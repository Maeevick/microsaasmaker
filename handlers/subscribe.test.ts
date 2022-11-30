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

    test(`when the user fills his/her firstname and email, then they are saved as name and email`, async () => {
        const fakeSubscriber = { firstname: 'Maeevick', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ok' })
        expect(fakeSubscribersPersistence).toEqual([{ name: 'Maeevick', email: 'some_email@domain.ext' }]);
    })

    test(`when the user fills firstname and an already existing email, then he/she is notified that he/she is already registered`, async () => {
        fakeSubscribersPersistence = [{ name: 'Aurel', email: 'some_email@domain.ext' }]
        const fakeSubscriber = { firstname: 'Maeevick', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: 'already subscribed' })
        expect(fakeSubscribersPersistence).toEqual([{ name: 'Aurel', email: 'some_email@domain.ext' }])
    })

    test(`when the user's' firstname is missing, then he/she is notified about the error`, async () => {
        fakeSubscribersPersistence = [{ name: 'Aurel', email: 'some_email@domain.ext' }]
        const fakeSubscriber = { firstname: '', email: 'some_email@domain.ext' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: 'firstname is missing' })
        expect(fakeSubscribersPersistence).toEqual([{ name: 'Aurel', email: 'some_email@domain.ext' }])
    })

    test(`when the user's' email is missing, then he/she is notified about the error`, async () => {
        fakeSubscribersPersistence = [{ name: 'Aurel', email: 'some_email@domain.ext' }]
        const fakeSubscriber = { firstname: 'Maeevick', email: '' }

        const sut = await subscribeCommandHandler(fakeSubscriberGateway)(fakeSubscriber)

        expect(sut).toEqual({ status: 'ko', message: 'email is missing' })
        expect(fakeSubscribersPersistence).toEqual([{ name: 'Aurel', email: 'some_email@domain.ext' }])
    })
})
