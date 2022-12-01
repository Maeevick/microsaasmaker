import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../data/connexion/data-source'
import { subscriberGatewayFactory } from '../../gateways/subscriber'
import { subscribeCommandHandler, SubscribeResponse } from '../../handlers/subscribe'

const UNKNOWN_ERROR_RESPONSE = {
    status: 'ko',
    message: 'oops, une erreur est survenue :(',
}
type UnknownErrorResponse = typeof UNKNOWN_ERROR_RESPONSE
type SubscribeEndPointResponse = SubscribeResponse | UnknownErrorResponse

const subscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<SubscribeEndPointResponse>) => {
    try {
        await dataSource.initialize()
        const gateway = await subscriberGatewayFactory(dataSource)

        const result = await subscribeCommandHandler(gateway)(req.body)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(UNKNOWN_ERROR_RESPONSE)
    } finally {
        await dataSource.destroy()
    }
}

export default subscribeEndPoint
