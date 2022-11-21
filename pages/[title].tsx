import type { NextPage } from 'next'
import { useRouter } from 'next/router'

export type WipPageProps = {
    fallback?: string,
}

const Wip: NextPage = ({ fallback }: WipPageProps) => {
    const router = useRouter()
    const query = router.query

    const title = query.title || ""

    return (
        <div className="w-full md:w-4/5 flex flex-col items-center m-6">
            <h1 className="text-4xl">
                <span className="italic">Bientôt disponible : </span>
                <strong>"{`${title && title[0].toUpperCase()}${title.slice(1)}`} ?"</strong>
            </h1>
            <div className="flex flex-row my-6 items-center">
                <p className="text-2xl">🚧</p>
                <p className="mx-3 text-xl italic my-6">Cette page est en cours de construction</p>
                <p className="text-2xl">🚧</p>
            </div>
        </div>
    )
}

export default Wip

