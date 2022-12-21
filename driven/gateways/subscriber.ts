import { DataSource } from "typeorm"
import { Subscriber } from "../data/entities/subscriber"
import { SubscriberData, SubscriberGateway, UnsubscriberData } from "../../core/ports/subscription"

export const subscriberGatewayFactory = (dataSource: DataSource): SubscriberGateway => {
    const repository = dataSource.getRepository(Subscriber)
    return {
        save: async ({ nickname, email }: SubscriberData) => {
            const subscriber = new Subscriber()
            subscriber.nickname = nickname
            subscriber.email = email
            await repository.save(subscriber)
        },
        getAll: async () => {
            return repository.find()
        },
        remove: async ({ email }: UnsubscriberData) => {
            await repository.delete({ email })
        }
    }
}