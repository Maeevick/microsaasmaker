import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

import { Subscriber } from '../entities/subscriber'

dotenv.config()

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Subscriber],
    synchronize: true,
    logging: false,
})
