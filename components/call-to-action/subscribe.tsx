import React from 'react'

type EMailFormTarget = {
    firstname: { value: string },
    email: { value: string },
}

const CallToAction = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const target = event.target as typeof event.target & EMailFormTarget

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: target.firstname.value,
                email: target.email.value,
            }),
        })
        const result = await response.json()

        handleClose()
    }

    return (
        <>
            <button className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center outline-none focus:outline-none" type="button" onClick={handleOpen}>
                Je veux être informé&#183;e quand c'est prêt !
            </button>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <p className="text-xl font-semibold grow text-start">Le lancement approche !</p>
                                    <button className="bg-transparent border-0 text-black leading-none font-semibold" onClick={handleClose}>
                                        <span className="text-xl text-orange-600">×</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex justify-end items-center ">
                                            <label htmlFor="firstname">ton prénom / pseudo :</label>
                                            <input required placeholder="prénom / pseudo" className="m-3 p-2 border border-amber-300 shadow rounded-xl" type="text" id="firstname" name="firstname" />
                                        </div>
                                        <div className="flex justify-end items-center ">
                                            <label htmlFor="email">ton email de contact :</label>
                                            <input required placeholder="email@domain.ext" className="m-3 p-2 border border-amber-300 shadow rounded-xl" type="text" id="email" name="email" pattern="^.+@.+\.\w+$" />
                                        </div>
                                        <button className="m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center outline-none focus:outline-none" type="submit">Valider</button>
                                    </form>
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