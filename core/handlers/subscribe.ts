import { ALREADY_SUBSCRIBED, EMAIL_IS_MISSING, FIRSTNAME_IS_MISSING, NEWLY_SUBSCRIBED } from '../constants'

import {
    SubscribeCommand,
    SubscriptionResponse,
    SubscriberGateway,
    CryptoGateway,
    SubscriptionKoMessage,
    SubscriptionOkMessage,
} from '../ports/subscription'

export const subscribeCommandHandler =
    ({ save, getAll }: SubscriberGateway, { encryptClearText, decryptHexText }: CryptoGateway) =>
    async ({ nickname, email }: SubscribeCommand): Promise<SubscriptionResponse> => {
        if (isFirstnameMissing(nickname)) return makeKoResponseWith(FIRSTNAME_IS_MISSING)

        if (isEmailMissing(email)) return makeKoResponseWith(EMAIL_IS_MISSING)

        const subscribers = await getAll()
        if (subscribers.find((sub) => decryptHexText(sub.email) === email)) {
            return makeOkResponseWith(ALREADY_SUBSCRIBED)
        }

        await save({
            nickname: nickname,
            email: encryptClearText(email),
        })

        return makeOkResponseWith(NEWLY_SUBSCRIBED)
    }

function isFirstnameMissing(nickname: string) {
    return !nickname
}

function isEmailMissing(email: string) {
    return !email
}

function makeOkResponseWith(message: SubscriptionOkMessage): SubscriptionResponse {
    return { status: 'ok', message }
}

function makeKoResponseWith(message: SubscriptionKoMessage): SubscriptionResponse {
    return { status: 'ko', message }
}
