import { 
    ALREADY_SUBSCRIBED,
    EMAIL_IS_MISSING,
    FIRSTNAME_IS_MISSING,
    NEWLY_SUBSCRIBED,
    SubscribeKoMessage,
    SubscribeOkMessage
} from "../constants/subscribe"

export type SubscriberData = {
    nickname: string,
    email: string,
}

export type SubscriberGateway = {
    save: (data: SubscriberData) => Promise<void>,
    getAll: () => Promise<SubscriberData[]>,
}

export type SubscribeCommand = {
    nickname: string,
    email: string,
}

export type SubscribeResponse = {
    status: 'ok' | 'ko',
    message: SubscribeOkMessage | SubscribeKoMessage,
}

export const subscribeCommandHandler = ({ save, getAll }: SubscriberGateway) => async ({ nickname, email }: SubscribeCommand): Promise<SubscribeResponse> => {
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

function makeOkResponseWith(message: SubscribeOkMessage): SubscribeResponse {
    return { status: 'ok', message }
}

function makeKoResponseWith(message: SubscribeKoMessage): SubscribeResponse {
    return { status: 'ko', message }
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