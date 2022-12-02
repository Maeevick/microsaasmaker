import { 
    ALREADY_SUBSCRIBED,
    EMAIL_IS_MISSING,
    FIRSTNAME_IS_MISSING,
    NEWLY_SUBSCRIBED,
    SubscriptionKoMessage,
    SubscriptionOkMessage
} from "../constants/subscription"
import {
    SubscribeCommand,
    SubscriberData,
    SubscriptionResponse,
    SubscriberGateway,
} from "./subscription"

export const subscribeCommandHandler = ({ save, getAll }: SubscriberGateway) => async ({ nickname, email }: SubscribeCommand): Promise<SubscriptionResponse> => {
    if (isFirstnameMissing(nickname)) return makeKoResponseWith(FIRSTNAME_IS_MISSING)

    if (isEmailMissing(email)) return makeKoResponseWith(EMAIL_IS_MISSING)

    const subscribers = await getAll()
    if (isAlreadySubscribed(email, subscribers)) return makeOkResponseWith(ALREADY_SUBSCRIBED)

    await save({
        nickname: nickname,
        email
    })

    return makeOkResponseWith(NEWLY_SUBSCRIBED)
}

function isFirstnameMissing(nickname: string) {
    return !nickname
}

function isEmailMissing(email: string) {
    return !email
}

function isAlreadySubscribed(email: string, subscribers: SubscriberData[]) {
    return subscribers.find(sub => sub.email === email)
}

function makeOkResponseWith(message: SubscriptionOkMessage): SubscriptionResponse {
    return { status: 'ok', message }
}

function makeKoResponseWith(message: SubscriptionKoMessage): SubscriptionResponse {
    return { status: 'ko', message }
}