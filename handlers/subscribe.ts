export type SubscriberData = {
    name: string,
    email: string,
}

export type SubscriberGateway = {
        save: (data: SubscriberData) => Promise<void>,
        getAll: () => Promise<SubscriberData[]>,
}

export type SubscribeCommand = {
    firstname: string,
    email: string,
}

export const subscribeCommandHandler = ({ save, getAll }: SubscriberGateway) => async ({ firstname, email }: SubscribeCommand) => {
    const subscribers = await getAll()
    
    if(isAlreadySubscribed(email, subscribers)) {
        return Error('already subscribed')
    }

    await save({
        name: firstname,
        email
    })
}

function isAlreadySubscribed(email: string, subscribers: SubscriberData[]) {
    return subscribers.find(sub => sub.email === email)
}