import { SubscriptionKoMessage, SubscriptionOkMessage } from "../constants/subscription"

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
