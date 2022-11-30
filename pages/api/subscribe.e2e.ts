import { createServer, IncomingMessage, ServerResponse } from 'http'
import { NextApiHandler } from 'next'
import { apiResolver } from 'next/dist/server/api-utils/node'
import supertest from 'supertest'
import { dataSource } from '../../data/connexion/data-source'
import { Subscriber } from '../../data/entities/subscriber'
import { SubscriberData } from '../../handlers/subscribe'
import subscribeEndPoint from './subscribe'

export const testClientHelper = (handler: NextApiHandler) => {
    const serverRequestListener = async (req: IncomingMessage, res: ServerResponse) => {
        const apiContext = {
            previewModeId: '',
            previewModeEncryptionKey: '',
            previewModeSigningKey: '',
        }

        return apiResolver(req, res, undefined, handler, apiContext, true, true)
    }
    return supertest(createServer(serverRequestListener))
}

const cleanDB = async () => {
    await dataSource.initialize()
    const repository = dataSource.getRepository(Subscriber)
    await repository.delete({})
    await dataSource.destroy()
}

const initDBWith = async (subscriber: SubscriberData) => {
    await dataSource.initialize()
    const repository = dataSource.getRepository(Subscriber)
    await repository.save(subscriber)
    await dataSource.destroy()
}

describe('POST - /api/subscribe', () => {
    beforeEach(async () => {
        await cleanDB()
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
        await initDBWith({ name: 'maeevick', email: 'some_email@domain.ext' })

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