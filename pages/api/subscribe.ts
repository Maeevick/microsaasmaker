import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../data/connexion/data-source'
import { subscriberGatewayFactory } from '../../gateways/subscriber'
import { subscribeCommandHandler, SubscribeResponse } from '../../handlers/subscribe'

const subscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<SubscribeResponse>) => {
    try {
        await dataSource.initialize()
        const gateway = await subscriberGatewayFactory(dataSource)

        const result = await subscribeCommandHandler(gateway)(req.body)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ status: 'ko', message: 'ops, an error occurred !' })
    } finally {
        await dataSource.destroy()
    }
}

export default subscribeEndPoint
