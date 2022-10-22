import type { NextPage } from 'next'
import CallToAction from '../components/call-to-action'

export type WipPagePros = {
    fallback?: string,
}

const Wip: NextPage = ({ fallback }: WipPagePros) => {
    return (
        <div className="w-full md:w-4/5 flex flex-col items-center">
            <div className="flex flex-row my-6 items-center">
                <p className="text-2xl">🚧</p>
                <p className="mx-3 text-2xl italic my-6"> Cette page est en cours de construction</p>
                <p className="text-2xl">🚧</p>
            </div>
            <CallToAction content="Je veux être informé quand c'est prêt !" />
        </div>
    )
}

export default Wip
