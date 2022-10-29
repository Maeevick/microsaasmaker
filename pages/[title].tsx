import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { title: 'pourquoi'}},
            { params: { title: 'quoi'}},
            { params: { title: 'comment'}},
        ],
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{}> = async (context) => {
    return {
        props: {}
      }
}

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
                <a className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">Je veux être informé quand c'est prêt !</a>
            </Link>
        </div>
    )
}

export default Wip

