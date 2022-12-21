import { dataSource } from "../driven/data/connexion/data-source"
import { Subscriber } from "../driven/data/entities/subscriber"
import { SubscriberData } from "../core/ports/subscription"

export const cleanSubscribersInDB = async () => {
    await dataSource.initialize()
    const repository = dataSource.getRepository(Subscriber)
    await repository.delete({})
    await dataSource.destroy()
}

export const initSubscribersInDBWith = async (subscriber: SubscriberData) => {
    await dataSource.initialize()
    const repository = dataSource.getRepository(Subscriber)
    await repository.save(subscriber)
    await dataSource.destroy()
}