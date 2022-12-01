export const COMMING_SOON_2023 = '... lancement janvier 2023 ...'
export const FIRSTNAME_IS_MISSING = 'pseudo manquant !'
export const EMAIL_IS_MISSING = 'email manquant !'
export const ALREADY_SUBSCRIBED = 'tu es déjà membre, à bientôt dans ta boîte mail !'
export const NEWLY_SUBSCRIBED = 'tout est ok, à bientôt dans ta boîte mail !'
export const UNKNOWN_ERROR = 'oops, une erreur est survenue :('

export type SubscribeKoMessage = typeof FIRSTNAME_IS_MISSING | typeof EMAIL_IS_MISSING
export type SubscribeOkMessage = typeof NEWLY_SUBSCRIBED | typeof ALREADY_SUBSCRIBED
