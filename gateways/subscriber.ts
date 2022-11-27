import { DataSource } from "typeorm";
import { SubscriberData } from "../handlers/subscribe";
import { Subscriber } from "../data/entities/subscriber";

export const subscriberGatewayFactory = async (dataSource: DataSource) => {
    const repository = dataSource.getRepository(Subscriber)
    return {
        save: async ({ name, email }: SubscriberData) => {
            const subscriber = new Subscriber()
            subscriber.name = name
            subscriber.email = email
            await repository.save(subscriber)
        }
    }
}