
import { NOT_SUBSCRIBED, UNSUBSCRIBED } from "../../constants/subscription"
import { testClientHelper } from "../../tests/helpers/api/test-client"
import { cleanSubscribersInDB, initSubscribersInDBWith } from "../../tests/helpers/persistence/subscriber"
import unsubscribeEndPoint from "./unsubscribe"

describe('POST - /api/unsubscribe', () => {
    beforeEach(async () => {
        await cleanSubscribersInDB()
    })
    test(`when the user's email exists, then he/she is notified`, async () => {
        await initSubscribersInDBWith({ nickname: 'Maeevick0', email: 'email0@domain.ext' })
        await initSubscribersInDBWith({ nickname: 'Maeevick1', email: 'email1@domain.ext' })
        await initSubscribersInDBWith({ nickname: 'Maeevick2', email: 'email2@domain.ext' })

        const sut = await testClientHelper(unsubscribeEndPoint)
            .delete('/api/subscribe')
            .send({ email: 'email1@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ok', message: UNSUBSCRIBED })
    })

    test(`when the user's email doesn't exist, then he/she is notified`, async () => {
        await initSubscribersInDBWith({ nickname: 'Maeevick0', email: 'email0@domain.ext' })
        await initSubscribersInDBWith({ nickname: 'Maeevick2', email: 'email2@domain.ext' })

        const sut = await testClientHelper(unsubscribeEndPoint)
            .delete('/api/subscribe')
            .send({ email: 'email1@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: NOT_SUBSCRIBED })
    })
})