
import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import BulletPoint from '../components/bullet-point'
import CallToAction from '../components/call-to-action/subscribe'
import Tile from '../components/tile'


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
      <section className="flex flex-col items-center border-t-orange-600 border-t-2 mt-10 pt-4">
        <h2 className="text-lg font-bold mb-3">Quel intérêt de t'abonner à une nième newsletter ?</h2>
        <p>Voici les thèmes que tu retrouveras dans ta boîte mail, indispensables pour avancer sur ta quête de liberté !</p>
        <div className="flex flex-col md:flex-row">
        <Tile>
          <h3 className="font-bold my-3">Définir ta stratégie !</h3>
          <ul className="text-left">
            <li className="mt-1 mb-2">Affiner le besoin et le problème auquel répond ton produit.</li>
            <li className="mt-1 mb-2">Rencontrer la cible à qui tu t'adresses.</li>
            <li className="mt-1 mb-2">Trouver tes éléments de différenciation.</li>
            <li className="mt-1 mb-2">Evaluer tes bénéfices et la viabilité économique de ton produit.</li>
          </ul>
        </Tile>
        <Tile>
          <h3 className="font-bold my-3">Découvrir le problème !</h3>
          <ul className="text-left">
            <li className="mt-1 mb-2">Faire le grand saut et interviewer tes users.</li>
            <li className="mt-1 mb-2">Synthétiser les données qualitatives.</li>
            <li className="mt-1 mb-2">Mesurer et organiser tes données quantitatives.</li>
            <li className="mt-1 mb-2">Ajuster en permanence ta perseption du besoin.</li>
          </ul>
        </Tile>
        <Tile>
          <h3 className="font-bold my-3">Créer vite et bien !</h3>
          <ul className="text-left">
            <li className="mt-1 mb-2">Définir ton MVP et le réduire à l'essentiel.</li>
            <li className="mt-1 mb-2">Mettre en place des bases techniques saines et solides.</li>
            <li className="mt-1 mb-2">Développer et itérer à la vitesse de l'éclair.</li>
            <li className="mt-1 mb-2">Mesurer et ajuster sans douleur et (presque) sans effort.</li>
          </ul>
        </Tile>
        <Tile>
          <h3 className="font-bold my-3">Atteindre la maturité !</h3>
          <ul className="text-left">
            <li className="mt-1 mb-2">Faire grandir ton produit et tes revenus.</li>
            <li className="mt-1 mb-2">Garder une longueur d'avance.</li>
            <li className="mt-1 mb-2">Observer les nouvelles oppotunités business.</li>
            <li className="mt-1 mb-2">Ne pas se laisser engloutir par la charge.</li>
          </ul>
        </Tile>
        </div>
        <p className="italic">...et plus encore...</p>
      </section>
      <CallToAction />
    </>
  )
}

export default Home
