import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type BulletPointProps = {
  img: string,
  content: string,
  isBold?: boolean,
}

const BulletPoint = ({ img, content, isBold = false }: BulletPointProps) => {
  return (
    <div className="flex m-3">
      <div className="w-[40px] min-w-[40px] flex items-center">
        <Image src={img} width={40} height={40} alt=""/>
      </div>
      <p className={`text-left text-lg mx-3 ${isBold ? 'font-bold' : ''}`}>{content}</p>
    </div>
  )
}

const CallToAction = () => {
  return (
    <button className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">
      <Link href="">
        Je veux être informé quand c'est prêt !
      </Link>
    </button>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <h1 className="m-6 text-xl md:text-6xl"><strong>Libère toi du travail en lançant ton <span className="text-orange-600"><em>Micro SaaS</em></span>!</strong></h1>
      <section className="flex flex-col md:flex-row">
        <div className="shrink max-w-sm">
          <Image src="/myself.png" width={400} height={400}  alt=""/>
        </div>
        <div className="flex flex-col md:justify-center">
          <BulletPoint content="Pourquoi coder 8 heures par jour pendant 40 ans pour quelqu'un d'autre ?" img="/why.png" />
          <BulletPoint content="Pourquoi galérer à trouver un poste plutôt que de créer ton job ?" img="/why.png" />
          <BulletPoint content="Pourquoi réver d'avoir de l'impact dans un domaine et attendre ?" img="/why.png" />
          <BulletPoint content="Lancer un produit SaaS est accessible à tout le monde : comme pour apprendre à marcher, encore faut-il essayer pour de réussir !" img="/gear.png" isBold={true} />
          <BulletPoint content="Bonne nouvelle : d'autres l'on fait avant toi !" img="/smile.png" />

          <CallToAction />
        </div>
      </section>
    </>
  )
}

export default Home
