import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../driven/data/connexion/data-source'
import { subscriberGatewayFactory } from '../../driven/gateways/subscriber'
import { subscribeCommandHandler } from '../../core/handlers/subscribe'
import { cryptoGatewayFactory } from '../../driven/gateways/crypto'
import { emailGatewayFactory } from '../../driven/gateways/email'
import { SubscriptionResponse } from '../../core/ports/subscription'
import { UNKNOWN_ERROR_RESPONSE } from './constants'

type SubscribeEndPointResponse = SubscriptionResponse | typeof UNKNOWN_ERROR_RESPONSE

const subscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<SubscribeEndPointResponse>) => {
    try {
        await dataSource.initialize()
        const subscriberGateway = subscriberGatewayFactory(dataSource)

        const cryptoGateway = cryptoGatewayFactory()

        const emailGateway = emailGatewayFactory()

        const result = await subscribeCommandHandler(subscriberGateway, cryptoGateway, emailGateway)(req.body)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(UNKNOWN_ERROR_RESPONSE)
    } finally {
        await dataSource.destroy()
    }
}

export default subscribeEndPoint
