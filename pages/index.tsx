import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

type BulletPointProps = {
  img: string,
  content: string,
  isBold?: boolean,
}

const BulletPoint = ({ img, content, isBold = false }: BulletPointProps) => {
  return (
    <div className="flex m-3">
      <div className="w-[40px] min-w-[40px] flex items-center"><img src={img} width="100%" /></div>
      <p className={`text-left text-lg mx-3 ${isBold ? 'font-bold' : ''}`}>{content}</p>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MicroSaaS Maker - Bienvenue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-1 flex-col items-center  w-full md:w-4/5 px-6 text-center">
        <h1 className="m-6 text-xl md:text-6xl"><strong>Libère toi du travail en lançant ton <span className="text-orange-600"><em>Micro SaaS</em></span>!</strong></h1>
        <section className="flex flex-col md:flex-row">
          <div className="shrink max-w-sm"><img src="/myself.png" width="100%" /></div>
          <div className="flex flex-col md:justify-center">
            
            <BulletPoint content="Pourquoi coder 8 heures par jour pendant 40 ans pour quelqu'un d'autre ?" img="/why.png" />
            <BulletPoint content="Pourquoi galérer à trouver un poste plutôt que de créer ton job ?" img="/why.png" />
            <BulletPoint content="Pourquoi réver d'avoir de l'impact dans un domaine et attendre ?" img="/why.png" />
            <BulletPoint content="Lancer un produit SaaS est accessible à tout le monde : comme pour apprendre à marcher, encore faut-il essayer pour de réussir !" img="/gear.png" isBold={true}/>
            <BulletPoint content="Bonne nouvelle : d'autres l'on fait avant toi !" img="/smile.png" />

            <div className="m-3 w-full p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">
              <p>Reçois un conseil par semaine</p>
              <p className="italic">(gratuitement et directement dans ta boîte mail)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
