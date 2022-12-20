import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../data/connexion/data-source'
import { subscriberGatewayFactory } from '../../gateways/subscriber'
import { subscribeCommandHandler } from '../../handlers/subscribe'
import { SubscriptionResponse } from '../../handlers/subscription'
import { UNKNOWN_ERROR_RESPONSE } from '../../constants/unknown-error-response'
import { cryptoGatewayFactory } from '../../gateways/crypto'

type SubscribeEndPointResponse = SubscriptionResponse | typeof UNKNOWN_ERROR_RESPONSE

const subscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<SubscribeEndPointResponse>) => {
    try {
        await dataSource.initialize()
        const subscriberGateway = subscriberGatewayFactory(dataSource)

        const cryptoGateway = cryptoGatewayFactory()

        const result = await subscribeCommandHandler(subscriberGateway, cryptoGateway)(req.body)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(UNKNOWN_ERROR_RESPONSE)
    } finally {
        await dataSource.destroy()
    }
}

export default subscribeEndPoint
