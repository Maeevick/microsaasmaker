import { UNSUBSCRIBED, NOT_SUBSCRIBED } from '../../core/constants'
import { apiWrapper } from '../../test-helpers/api-wrapper'
import { cleanSubscribersInDB, initSubscribersInDBWith } from '../../test-helpers/db-subscriber-utils'
import { cryptoGatewayFactory } from '../../driven/gateways/crypto'
import unsubscribeEndPoint from './unsubscribe'

describe('POST - /api/unsubscribe', () => {
    const cryptoGateway = cryptoGatewayFactory()

    beforeEach(async () => {
        await cleanSubscribersInDB()
    })
    test(`when the user's email exists, then he/she is notified`, async () => {
        const email0 = cryptoGateway.encryptClearText('email0@domain.ext')
        const email1 = cryptoGateway.encryptClearText('email1@domain.ext')
        const email2 = cryptoGateway.encryptClearText('email2@domain.ext')

        await initSubscribersInDBWith({ nickname: 'Maeevick0', email: email0 })
        await initSubscribersInDBWith({ nickname: 'Maeevick1', email: email1 })
        await initSubscribersInDBWith({ nickname: 'Maeevick2', email: email2 })

        const sut = await apiWrapper(unsubscribeEndPoint)
            .delete('/api/subscribe')
            .send({ email: 'email1@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ok', message: UNSUBSCRIBED })
    })

    test(`when the user's email doesn't exist, then he/she is notified`, async () => {
        const email0 = cryptoGateway.encryptClearText('email0@domain.ext')
        const email2 = cryptoGateway.encryptClearText('email2@domain.ext')

        await initSubscribersInDBWith({ nickname: 'Maeevick0', email: email0 })
        await initSubscribersInDBWith({ nickname: 'Maeevick2', email: email2 })

        const sut = await apiWrapper(unsubscribeEndPoint)
            .delete('/api/subscribe')
            .send({ email: 'email1@domain.ext' })
            .set('Accept', 'application/json')

        expect(sut.status).toEqual(200)
        expect(sut.body).toEqual({ status: 'ko', message: NOT_SUBSCRIBED })
    })
})
