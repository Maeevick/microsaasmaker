import Mailjet from 'node-mailjet'

const API_KEY = process.env.MAILJET_API_KEY as string
const SECRET_KEY = process.env.MAILJET_SECRET_KEY as string
const SENDER_EMAIL = process.env.MAILJET_SENDER as string

const NEWSLETTER_NAME = 'MicroSaaS Mailer'

type ReceiverData = {
    email: string
    nickname: string
}

export const sendEmailGatewayFactory = () => {
    const mailjet = Mailjet.apiConnect(API_KEY, SECRET_KEY)
    return {
        sendTo: async ({ email, nickname }: ReceiverData) => {
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
                            Subject: "MicroSaaS Mailer Disabled!",
                            TextPart: "Hey you!\nMay the delivery force be with you!",
                            HTMLPart: "<h3>Hey you! welcome to <a href=\"https://microsaasmaker.com/\">MicroSaaS Maker</a>!</h3><br />May the delivery force be with you!"
                        }
                    ]
                }, {}, false)

            return { status: 'ok', message: '' }
        }
    }
}