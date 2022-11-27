
import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import BulletPoint from '../components/bullet-point'
import CallToAction from '../components/call-to-action/subscribe'


const Home: NextPage = () => {
  return (
    <>
      <h1 className="m-6 text-xl md:text-4xl"><strong>Libère toi du travail en lançant ton <span className="text-orange-600"><em>Micro SaaS</em></span>!</strong></h1>
      <section className="flex flex-col items-center md:flex-row">
        <div className="shrink max-w-sm">
          <Image src="/myself.png" width={400} height={400} alt="" />
        </div>
        <div className="flex flex-col md:justify-center md:ml-10">
          <BulletPoint content="Pourquoi coder 8 heures par jour pendant 40 ans pour quelqu'un d'autre ?" img="/why.png" />
          <BulletPoint content="Pourquoi galérer dans un job / environnement qui ne te convient pas ?" img="/why.png" />
          <BulletPoint content="Pourquoi réver d'avoir de l'impact dans un domaine et attendre ?" img="/why.png" />
          <BulletPoint content="Aujourd'hui lancer un produit en solo est accessible à tout dev !" img="/gear.png" isBold={true} />
          <BulletPoint content="Bonne nouvelle : d'autres l'on fait avant toi !" img="/smile.png" />
          
          <CallToAction />
        </div>
      </section>
    </>
  )
}

export default Home
