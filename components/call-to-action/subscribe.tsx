import React from 'react'

type EMailFormTarget = {
    firstname: { value: string },
    email: { value: string },
}

const CallToAction = () => {
    const [showModal, setShowModal] = React.useState(false)
    const [showOkMessage, setShowOkMessage] = React.useState(false)

    const handleOpen = () => {
        setShowOkMessage(false)
        setShowModal(true)
    }
    const handleClose = () => setShowModal(false)

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const target = event.target as typeof event.target & EMailFormTarget

        await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: target.firstname.value,
                email: target.email.value,
            }),
        })

        setShowOkMessage(true)
        setTimeout(handleClose, 2000)
    }


    return (
        <>
            <button className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center outline-none focus:outline-none" type="button" onClick={handleOpen}>
                <span className="text-lg">Abonne-toi à la Newsletter !</span>
            </button>
            {showModal && (
                <>
                    <div className="m-3 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <p className="text-2xl font-semibold grow text-start">La newsletter exclusive qui accompagne la chaîne Youtube.</p>
                                    <button className="ml-6 bg-transparent border-0 text-black leading-none font-semibold" onClick={handleClose}>
                                        <span className="text-xl text-orange-600">×</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-col">
                                    <p className="font-bold text-start">Reçois un mail par semaine, avec tout ce qu'il faut pour lancer ton MicroSaaS :</p>
                                    <p className="text-start">... de la tech, du produit, du business, l'essentiel et l'indispensable pour gagner ta liberté.</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-wrap justify-around m-3">
                                            <input required placeholder="ton prénom / pseudo" className="m-3 p-2 border border-amber-300 shadow rounded-xl" type="text" id="firstname" name="firstname" />
                                            <input required placeholder="ton email" className="m-3 p-2 border border-amber-300 shadow rounded-xl" type="text" id="email" name="email" pattern="^.+@.+\.\w+$" />
                                            <button className="m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center outline-none focus:outline-none" type="submit">Valider</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex-col justify-center p-2 border-t border-solid border-slate-200 rounded-t">
                                    {showOkMessage
                                        ? <p className="italic text-green-600">...tout est ok, à bientôt dans ta boîte mail :)</p>
                                        : <p className="italic text-orange-600">... lancement janvier 2023 ...</p>
                                    }
                                    <p className="italic text-sm">&#9888; Ton mail ne sera jamais partagé avec personne &#9888;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}

export default CallToAction