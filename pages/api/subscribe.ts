import type { NextApiRequest, NextApiResponse } from 'next'
import { dataSource } from '../../data/connexion/data-source'
import { Subscriber } from '../../data/entities/subscriber'

type Data = {
  message: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    await dataSource.initialize()
    const subscriberRepository = dataSource.getRepository(Subscriber)

    const subscriber = new Subscriber()
    subscriber.name = req.body.firstname as string
    subscriber.email = req.body.email as string

    await subscriberRepository.save(subscriber)

    res.status(200).json({ message: 'ok' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'ko' })
  } finally {
    await dataSource.destroy()
  }
}
