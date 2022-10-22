import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import LinkTile from '../components/link-tile'

const Product: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MicroSaaS Maker - Produits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
        <div className="flex max-w-4xl flex-wrap justify-around sm:w-full">
            <LinkTile 
                url="https://github.com/Maeevick" 
                isExternal={true} 
                title="Ressources gratuites" 
                content="Une sélection de ressources des meilleurs pratiques d'ingénieurie logicielle pour t'améliorer et passer au niveau supérieur."
            />

            <LinkTile 
                url="" 
                title="Formation : Imaginer, valider et vendre ton produit" 
                content="L'essentiel du <em>Lean Product Management</em> pour concevoir un SaaS qui va cartonner et ravir ton audience !"
            />

            <LinkTile 
                url="" 
                title="Formation : Concevoir, développer et mettre en prod ton produit" 
                content="Les meilleurs pratiques d'<em>Extreme Programming</em> et du <em>DevOps</em> pour dev à la vitesse de l'éclair et en toute sérennité !"
            />

            <LinkTile 
                url="" 
                title="Formation : Faire grandir ton produit" 
                content="Pourquoi et Comment faire grandir ton produit pour prendre ta retraite bien méritée !"
            />

            <LinkTile 
                url=""
                isExternal={true} 
                title="Coaching" 
                content="Besoin de quelqu'un pour te guider dans l'atteinte de tes objectifs ? Tu veux lancer ton SaaS sans savoir par où t'y prendre ?"
            />
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Product
