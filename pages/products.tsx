import type { NextPage } from 'next'
import CallToAction from '../components/call-to-action'
import LinkTile from '../components/link-tile'

const Product: NextPage = () => {
  return (
    <div className="flex flex-wrap justify-around w-full md:w-4/5">
      <LinkTile
        title="Formation : Imaginer, valider et vendre ton produit"
        content="L'essentiel du Lean Product Management pour concevoir un SaaS qui va cartonner et ravir ton audience !"
        isSoldOut={true}
        callToAction={<CallToAction content="Je m'inscris sur la liste d'attente"/>}
      />

      <LinkTile
        title="Formation : Concevoir, développer et mettre en prod ton produit"
        content="Les meilleurs pratiques d'Extreme Programming et du DevOps pour dev à la vitesse de l'éclair et en toute sérennité !"
        isSoldOut={true}
        callToAction={<CallToAction content="Je m'inscris sur la liste d'attente"/>}
      />

      <LinkTile
        title="Formation : Faire grandir ton produit"
        content="Pourquoi et Comment faire grandir ton produit pour prendre ta retraite bien méritée !"
        isSoldOut={true}
        callToAction={<CallToAction content="Je m'inscris sur la liste d'attente"/>}
      />

      <LinkTile
        callToAction={<CallToAction content="Je veux réserver un créneau" isExternal={true} url="https://calendly.com/microsaasmaker/echange-decouverte"/>}
        title="Coaching"
        content="Besoin de quelqu'un pour te guider dans l'atteinte de tes objectifs ? Tu veux lancer ton SaaS mais tu ne sais pas par où commencer ?"
      />
    </div>
  )
}

export default Product
