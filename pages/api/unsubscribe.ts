import { NextApiRequest, NextApiResponse } from "next"
import { dataSource } from "../../data/connexion/data-source"
import { subscriberGatewayFactory } from "../../gateways/subscriber"
import { SubscriptionResponse } from "../../handlers/subscription"
import { unsubscribeCommandHandler } from "../../handlers/unsubscribe"
import { UNKNOWN_ERROR_RESPONSE } from "../../constants/unknown-error-response"
import { cryptoGatewayFactory } from "../../gateways/crypto"

type UnsubscribeEndPointResponse = SubscriptionResponse | typeof UNKNOWN_ERROR_RESPONSE

const unsubscribeEndPoint = async (req: NextApiRequest, res: NextApiResponse<UnsubscribeEndPointResponse>) => {
    try {
        await dataSource.initialize()
        const subscriberGateway = await subscriberGatewayFactory(dataSource)

        const cryptoGateway = cryptoGatewayFactory()

        const result = await unsubscribeCommandHandler(subscriberGateway, cryptoGateway)(req.body)

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(UNKNOWN_ERROR_RESPONSE)
    } finally {
        await dataSource.destroy()
    }
}

export default unsubscribeEndPoint
