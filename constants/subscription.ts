export const COMMING_SOON_2023 = `... lancement janvier 2023 ...`
export const FIRSTNAME_IS_MISSING = `pseudo manquant !`
export const EMAIL_IS_MISSING = `email manquant !`
export const ALREADY_SUBSCRIBED = `tu es déjà membre, à bientôt dans ta boîte mail !`
export const NEWLY_SUBSCRIBED = `tout est ok, à bientôt dans ta boîte mail !`

export const UNSUBSCRIBED = `à bientôt qui sait ;)`
export const NOT_SUBSCRIBED = `oops, je ne te trouve pas tu n'était déjà plus là`

export type SubscriptionKoMessage = typeof FIRSTNAME_IS_MISSING | typeof EMAIL_IS_MISSING | typeof NOT_SUBSCRIBED
export type SubscriptionOkMessage = typeof NEWLY_SUBSCRIBED | typeof ALREADY_SUBSCRIBED | typeof UNSUBSCRIBED
