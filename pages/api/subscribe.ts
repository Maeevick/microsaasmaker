import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../data/connexion/data-source'
import { subscriberGatewayFactory } from '../../gateways/subscriber'
import { subscribeCommandHandler } from '../../handlers/subscribe'

type Data = {
    message: string,
}

const subscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await dataSource.initialize()
        const gateway = await subscriberGatewayFactory(dataSource)

        await subscribeCommandHandler(gateway)(req.body)

        res.status(200).json({ message: 'ok' })
    } catch (error) {
        console.error('An error occured and had been catched:\n', error)
        res.status(500).json({ message: 'ko' })
    } finally {
        await dataSource.destroy()
    }
}

export default subscribeEndPoint
