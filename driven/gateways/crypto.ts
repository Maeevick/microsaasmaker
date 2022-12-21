
import * as dotenv from 'dotenv'
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'
import { CryptoGateway } from '../../core/ports/subscription'


dotenv.config()

const ALGORITHM = process.env.CRYPTO_ALGORITHM as string
const SECRET = process.env.CRYPTO_SECRET as string
const IV = process.env.CRYPTO_IV as string

export const cryptoGatewayFactory = (): CryptoGateway => {
    return {
        encryptClearText: (data: string) => {
            const cipher = createCipheriv(ALGORITHM, SECRET, IV)

            let encrypted = cipher.update(data, 'utf8', 'hex')
            encrypted += cipher.final('hex')

            return encrypted
        },
        decryptHexText: (data: string) => {
            const decipher = createDecipheriv(ALGORITHM, SECRET, IV)

            let decrypted = decipher.update(data, 'hex', 'utf8')
            decrypted += decipher.final('utf8')

            return decrypted
        }
    }
}
