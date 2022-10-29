import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type WipPageProps = {
    fallback?: string,
}

const Wip: NextPage = ({ fallback }: WipPageProps) => {
    const router = useRouter()
    const { title } = router.query

    return (
        <div className="w-full md:w-4/5 flex flex-col items-center m-6">
            <h1 className="text-4xl">
                <span className="italic">Bientôt disponible : </span>
                <strong>"{title && `${title[0].toUpperCase()}${title.slice(1)}`} ?"</strong>
            </h1>
            <div className="flex flex-row my-6 items-center">
                <p className="text-2xl">🚧</p>
                <p className="mx-3 text-xl italic my-6">Cette page est en cours de construction</p>
                <p className="text-2xl">🚧</p>
            </div>
            <Link href={{ pathname: '/[title]', query: { title }}}>
                <span className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">Je veux être informé quand c'est prêt !</span>
            </Link>
        </div>
    )
}

export default Wip

