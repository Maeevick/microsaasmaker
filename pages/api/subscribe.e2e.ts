import { testClientHelper } from '../../tests/helpers/api/test-client'
import { cleanSubscribersInDB, initSubscribersInDBWith } from '../../tests/helpers/persistence/subscriber'
import subscribeEndPoint from './subscribe'

describe('POST - /api/subscribe', () => {
    beforeEach(async () => {
        await cleanSubscribersInDB()
    })
    test(`when the user's firstname is missing, then he/she is notified`, async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ email: 'email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: 'firstname is missing' })
    })

    test(`when the user's email is missing, then he/she is notified`, async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ firstname: 'Maeevick' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: 'email is missing' })
    })

    test('when the user is already subscribed, then he/she is notified', async () => {
        await initSubscribersInDBWith({ name: 'maeevick', email: 'some_email@domain.ext' })

        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ firstname: 'maeevick', email: 'some_email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: 'already subscribed' })
    })

    test('when the user subscribes successfully, then he/she is notified', async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ firstname: 'maeevick', email: 'some_email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ok' })
    })
})