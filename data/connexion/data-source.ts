import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

import { Subscriber } from '../entities/subscriber'

dotenv.config()

const config = makeConfig(process.env.NODE_ENV)

export const dataSource = new DataSource({
    type: 'postgres',
    entities: [Subscriber],
    synchronize: true,
    logging: false,
    ...config,
})

function makeConfig(env: string) {
    if (env === 'test') {
        return {
            host: process.env.DB_HOST_E2E,
            port: Number(process.env.DB_PORT_E2E),
            username: process.env.DB_USER_E2E,
            password: process.env.DB_PASS_E2E,
            database: process.env.DB_NAME_E2E,
        }
    }
    return {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
}
