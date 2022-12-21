import { SubscriptionKoMessage, SubscriptionOkMessage } from "../../../constants/subscription"
import { FIRSTNAME_IS_MISSING, EMAIL_IS_MISSING, NOT_SUBSCRIBED, NEWLY_SUBSCRIBED, ALREADY_SUBSCRIBED, UNSUBSCRIBED } from "../constants"

export type SubscriberData = {
    nickname: string,
    email: string,
}

export type UnsubscriberData = {
    email: string,
}

export type SubscriberGateway = {
    getAll: () => Promise<SubscriberData[]>,
    save: (data: SubscriberData) => Promise<void>,
    remove: (data: UnsubscriberData) => Promise<void>
}

export type CryptoGateway = {
    encryptClearText: (data: string) => string
    decryptHexText: (data: string) => string
}

export type SubscribeCommand = {
    nickname: string,
    email: string,
}

export type UnsubscribeCommand = {
    email: string,
}

export type SubscriptionKoMessage = typeof FIRSTNAME_IS_MISSING | typeof EMAIL_IS_MISSING | typeof NOT_SUBSCRIBED
export type SubscriptionOkMessage = typeof NEWLY_SUBSCRIBED | typeof ALREADY_SUBSCRIBED | typeof UNSUBSCRIBED

export type SubscriptionResponse = {
    status: 'ok' | 'ko',
    message: SubscriptionOkMessage | SubscriptionKoMessage,
}
