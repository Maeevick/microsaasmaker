import {
    NOT_SUBSCRIBED,
    UNSUBSCRIBED
} from "../constants/subscription"
import {
    SubscriberData,
    SubscriptionResponse,
    SubscriberGateway,
    UnsubscribeCommand
} from "./subscription"

export const unsubscribeCommandHandler = ({ remove, getAll }: SubscriberGateway) => async ({ email }: UnsubscribeCommand): Promise<SubscriptionResponse> => {
    const subscribers = await getAll()
    if(isNotSubscribed(email, subscribers)) return { status: 'ko', message: NOT_SUBSCRIBED }
    
    await remove({ email })

    return { status: 'ok', message: UNSUBSCRIBED }
}

function isNotSubscribed(email: string, subscribers: SubscriberData[]) {
    return !subscribers.find((sub) => sub.email === email)
}