import { NOT_SUBSCRIBED, UNSUBSCRIBED } from '../constants'
import { SubscriptionResponse, SubscriberGateway, UnsubscribeCommand, CryptoGateway } from '../ports/subscription'

export const unsubscribeCommandHandler =
    ({ remove, getAll }: SubscriberGateway, { decryptHexText }: CryptoGateway) =>
    async ({ email }: UnsubscribeCommand): Promise<SubscriptionResponse> => {
        const subscribers = await getAll()
        const target = subscribers.find((sub) => decryptHexText(sub.email) === email)
        if (!target) {
            return { status: 'ko', message: NOT_SUBSCRIBED }
        }

        await remove({ email: target.email })

        return { status: 'ok', message: UNSUBSCRIBED }
    }
