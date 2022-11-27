export type SubscriberData = {
    name: string,
    email: string,
}

export type SubscriberGateway = {
    gateway: {
        save: (data: SubscriberData) => Promise<void>
    }
}

export type SubscribeCommand = {
    firstname: string,
    email: string,
}

export const subscribeCommandHandler = ({ gateway }: SubscriberGateway) => async ({ firstname, email }: SubscribeCommand) => {
    await gateway.save({
        name: firstname,
        email
    })
}