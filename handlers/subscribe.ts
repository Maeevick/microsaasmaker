
export const FIRSTNAME_IS_MISSING = 'pseudo manquant !'
export const EMAIL_IS_MISSING = 'email manquant !'
export const ALREADY_SUBSCRIBED = 'tu es déjà membre, à bientôt dans ta boîte mail !'
export const NEWLY_SUBSCRIBED = 'tout est ok, à bientôt dans ta boîte mail !'
export type SubscribeKoMessage = typeof FIRSTNAME_IS_MISSING | typeof EMAIL_IS_MISSING
export type SubscribeOkMessage = typeof NEWLY_SUBSCRIBED | typeof ALREADY_SUBSCRIBED

export type SubscriberData = {
    name: string,
    email: string,
}

export type SubscriberGateway = {
    save: (data: SubscriberData) => Promise<void>,
    getAll: () => Promise<SubscriberData[]>,
}

export type SubscribeCommand = {
    firstname: string,
    email: string,
}

export type SubscribeResponse = {
    status: 'ok' | 'ko',
    message: SubscribeOkMessage | SubscribeKoMessage,
}

export const subscribeCommandHandler = ({ save, getAll }: SubscriberGateway) => async ({ firstname, email }: SubscribeCommand): Promise<SubscribeResponse> => {
    if (isFirstnameMissing(firstname)) return makeKoResponseWith(FIRSTNAME_IS_MISSING)

    if (isEmailMissing(email)) return makeKoResponseWith(EMAIL_IS_MISSING)

    const subscribers = await getAll()
    if (isAlreadySubscribed(email, subscribers)) return makeOkResponseWith(ALREADY_SUBSCRIBED)

    await save({
        name: firstname,
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

function isFirstnameMissing(firstname: string) {
    return !firstname
}

function isEmailMissing(email: string) {
    return !email
}

function isAlreadySubscribed(email: string, subscribers: SubscriberData[]) {
    return subscribers.find(sub => sub.email === email)
}