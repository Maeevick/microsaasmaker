import { SubscriptionKoMessage, SubscriptionOkMessage } from "../constants/subscription"

export type SubscriberData = {
    nickname: string,
    email: string,
}

export type UnsubscriberData = {
    email: string,
}

export type SubscriberGateway = {
    save: (data: SubscriberData) => Promise<void>,
    getAll: () => Promise<SubscriberData[]>,
    remove: (data: UnsubscriberData) => Promise<void>
}

export type SubscribeCommand = {
    nickname: string,
    email: string,
}

export type UnsubscribeCommand = {
    email: string,
}

export type SubscriptionResponse = {
    status: 'ok' | 'ko',
    message: SubscriptionOkMessage | SubscriptionKoMessage,
}