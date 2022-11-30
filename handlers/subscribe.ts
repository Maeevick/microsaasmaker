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
    message?: string,
}

export const subscribeCommandHandler = ({ save, getAll }: SubscriberGateway) => async ({ firstname, email }: SubscribeCommand): Promise<SubscribeResponse> => {
    if (isFirstnameMissing(firstname)) return makeKoResponseWith('firstname is missing')

    if (isEmailMissing(email)) return makeKoResponseWith('email is missing')

    const subscribers = await getAll()
    if (isAlreadySubscribed(email, subscribers)) return makeKoResponseWith('already subscribed')

    await save({
        name: firstname,
        email
    })

    return makeOkResponse()
}

function makeOkResponse(message?: string): SubscribeResponse {
    return { status: 'ok', message }
}

function makeKoResponseWith(message: string): SubscribeResponse {
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