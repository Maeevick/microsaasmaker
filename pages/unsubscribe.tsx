import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type UnsubscribeTarget = {
    email: { value: string }
}

const Unsubscribe: NextPage = () => {
    const router = useRouter()
    const [apiDynamicMessage, setApiDynamicMessage] = React.useState('toutes tes données seront supprimées !')
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const target = event.target as typeof event.target & UnsubscribeTarget

        const response = await fetch('/api/unsubscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: target.email.value,
            }),
        })
        const { status, message } = await response.json()

        setApiDynamicMessage(message)
        if (status === 'ok') setTimeout(() => router.push('/'), 2000)
    }

    return (
        <>
            <h1 className="m-6 text-xl md:text-4xl">Aie ! Si tu es là c'est que j'ai raté quelque chose...</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-around m-3">
                    <input
                        required
                        placeholder="ton email"
                        className="m-3 p-2 border border-amber-300 shadow rounded-xl"
                        type="text"
                        id="email"
                        name="email"
                        pattern="^.+@.+\.\w+$"
                    />
                    <button
                        className="m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center outline-none focus:outline-none"
                        type="submit"
                    >
                        Valider
                    </button>
                </div>
            </form>
            <div className="flex-col justify-center p-2 border-t border-solid border-slate-200 rounded-t">
                <p className="italic text-orange-600">{apiDynamicMessage}</p>
            </div>
        </>
    )
}

export default Unsubscribe
