import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export type WipPageProps = {
    fallback?: string,
}

type CallToActionProps = {
    query: ParsedUrlQuery,
}

const CallToAction = ({ query }: CallToActionProps) => {
    return (
        <button className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">
            <Link href={{ pathname: '/[title]', query }}>
                Je veux être informé quand c'est prêt !
            </Link>
        </button>
    )
}

const Wip: NextPage = ({ fallback }: WipPageProps) => {
    const router = useRouter()
    const query = router.query

    const title = query.title || ""

    return (
        <div className="w-full md:w-4/5 flex flex-col items-center m-6">
            <h1 className="text-4xl">
                <span className="italic">Bientôt disponible : </span>
                <strong>"{`${title[0].toUpperCase()}${title.slice(1)}`} ?"</strong>
            </h1>
            <div className="flex flex-row my-6 items-center">
                <p className="text-2xl">🚧</p>
                <p className="mx-3 text-xl italic my-6">Cette page est en cours de construction</p>
                <p className="text-2xl">🚧</p>
            </div>

            <CallToAction query={query} />
        </div>
    )
}

export default Wip

