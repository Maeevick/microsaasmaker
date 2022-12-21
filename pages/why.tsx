import { NextPage } from 'next'

const Why: NextPage = () => {
    return (
        <div className="w-full md:w-4/5 flex flex-col m-6">
            <div className="my-2 py-2 border-b border-b-amber-300">
                <h1 className="text-2xl md:text-6xl">
                    <strong>
                        Pourquoi lancer ton{' '}
                        <span className="text-orange-600">
                            <em>Micro SaaS</em>
                        </span>{' '}
                        ?
                    </strong>
                </h1>
                <p className="my-2 italic">C'est vrai ça : pourquoi se lancer dans une telle aventure ?</p>
            </div>
            <section className="flex flex-col justify-start my-6text-left text-justify">
                <div className="my-2 py-2 border-b border-b-amber-300">
                    <h2 className="font-bold">
                        Si tu es comme moi, ou plus ou moins comme moi, tu dois ressentir le besoin de créer quelque
                        chose par toi-même, qui a du sens et qui t'anime.
                    </h2>
                    <ul className="my-1">
                        <li>
                            &#183; peut-être que tu t'ennuies dans ton job actuel ou que tu attends avec impatience la
                            fin de ta mission ?
                        </li>
                        <li>&#183; peut-être que tu as fait le tour de ce que tu pouvais apprendre ?</li>
                        <li>
                            &#183; peut-être que tu as atteint un certain plafond de verre avec tes revenus issus de la
                            vente de temps ?
                        </li>
                    </ul>
                    <p className="my-4 italic text-center">En étant honnête, c'est mon cas !</p>
                    <div className="my-2">
                        <p>Au bout d'un moment, plus ou moins rapide selon l'environnement, je me lasse :</p>
                        <ul className="my-1">
                            <li>&#183; perte de sens vis-à-vis de la mission !</li>
                            <li>&#183; absence de nouveaux apprentissages !</li>
                            <li>
                                &#183; tant que tu vends ton temps, que ce soit en tant que salarié ou freelance, tes
                                revenus seront limités !
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-2 py-2 border-b border-b-amber-300">
                    <h2 className="font-bold">
                        Tu es capable de coder, tu as un avantage sur 95% de la population pour lancer ton produit.
                    </h2>
                    <p className="my-1">Que tu veuilles :</p>
                    <ul className="my-1">
                        <li>&#183; te lancer le défi de lancer quelque chose !</li>
                        <li>&#183; te créer un portfolio pour lancer ta carrière !</li>
                        <li>&#183; compléter, voir remplacer, tes revenus actuels !</li>
                        <li>&#183; assurer ta retraite !</li>
                        <li>&#183; ... toute autre raison qui t'est propre...</li>
                    </ul>
                </div>
                <div className="my-2 py-2 border-b border-b-amber-300">
                    <h2 className="font-bold">
                        Lancer son MicroSaaS présente peu de risques, peu de frais, une charge de travail modérée (quand
                        on s'y prend bien) et des bénéfices importants.
                    </h2>
                    <p className="my-1">Personnellement, je veux deux choses :</p>
                    <ul className="my-1">
                        <li>&#183; être fier de moi : avoir lancé un produit de qualité et utile.</li>
                        <li>&#183; être libre du travail : avoir une source de revenus alternative.</li>
                    </ul>
                </div>
                <p className="my-2 italic">Si je peux le faire, tu peux aussi !</p>
            </section>
        </div>
    )
}

export default Why
