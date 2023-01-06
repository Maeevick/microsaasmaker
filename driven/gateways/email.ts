import Mailjet from 'node-mailjet'
import { welcomeEmailFactory } from '../../core/domain/welcome-email'
import { SubscriberData } from '../../core/ports/subscription'

const API_KEY = process.env.MAILJET_API_KEY as string
const SECRET_KEY = process.env.MAILJET_SECRET_KEY as string
const SENDER_EMAIL = process.env.MAILJET_SENDER as string

const NEWSLETTER_NAME = 'MicroSaaS Mailer'

export const emailGatewayFactory = () => {
    const mailjet = Mailjet.apiConnect(API_KEY, SECRET_KEY)
    return {
        sendWelcomeMessageTo: async ({ email, nickname }: SubscriberData) => {
            const { subject, text, html } = welcomeEmailFactory(nickname)

            await mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [
                        {
                            From: {
                                Email: SENDER_EMAIL,
                                Name: NEWSLETTER_NAME,
                            },
                            To: [{
                                Email: email,
                                Name: nickname,
                            }],
                            Subject: subject,
                            TextPart: text,
                            HTMLPart: html,
                        }
                    ]
                }, {}, true)
        }
    }
}