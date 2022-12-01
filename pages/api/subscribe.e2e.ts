import { FIRSTNAME_IS_MISSING, EMAIL_IS_MISSING, ALREADY_SUBSCRIBED, NEWLY_SUBSCRIBED } from '../../constants/subscribe'
import { testClientHelper } from '../../tests/helpers/api/test-client'
import { cleanSubscribersInDB, initSubscribersInDBWith } from '../../tests/helpers/persistence/subscriber'
import subscribeEndPoint from './subscribe'

describe('POST - /api/subscribe', () => {
    beforeEach(async () => {
        await cleanSubscribersInDB()
    })
    test(`when the user's nickname is missing, then he/she is notified`, async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ email: 'email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: FIRSTNAME_IS_MISSING })
    })

    test(`when the user's email is missing, then he/she is notified`, async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ nickname: 'Maeevick' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: EMAIL_IS_MISSING })
    })

    test('when the user is already subscribed, then he/she is notified', async () => {
        await initSubscribersInDBWith({ nickname: 'maeevick', email: 'some_email@domain.ext' })

        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ nickname: 'maeevick', email: 'some_email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ok', message: ALREADY_SUBSCRIBED })
    })

    test('when the user subscribes successfully, then he/she is notified', async () => {
        const sut = await testClientHelper(subscribeEndPoint)
            .post('/api/subscribe')
            .send({ nickname: 'maeevick', email: 'some_email@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ok', message: NEWLY_SUBSCRIBED })
    })
})