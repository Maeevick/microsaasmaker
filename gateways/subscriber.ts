import { DataSource } from "typeorm";
import { SubscriberData, SubscriberGateway } from "../handlers/subscribe";
import { Subscriber } from "../data/entities/subscriber";

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
        }
    }
}