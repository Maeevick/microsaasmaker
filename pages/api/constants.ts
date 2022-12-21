import { SubscriptionResponse } from '../../core/ports/subscription'

const UNKNOWN_ERROR = `oops, une erreur est survenue :(`
export const UNKNOWN_ERROR_RESPONSE = {
    status: 'ko',
    message: typeof UNKNOWN_ERROR,
}
