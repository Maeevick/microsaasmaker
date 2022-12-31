import { NextApiRequest, NextApiResponse } from "next"
import { sendEmailGatewayFactory } from "../../driven/gateways/email"
import { UNKNOWN_ERROR_RESPONSE } from "./constants"

const RECEIVER_EMAIL = process.env.TEST_RECEIVER as string

const sendEndPoint = async (req: NextApiRequest, res: NextApiResponse) => {
    const emailGateway = sendEmailGatewayFactory()
    try {
        const result = await emailGateway.sendTo({ email: RECEIVER_EMAIL, nickname: 'Nick Nam' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(UNKNOWN_ERROR_RESPONSE)
    }
}
export default sendEndPoint