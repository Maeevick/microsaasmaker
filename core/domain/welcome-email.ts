const WELCOME_MSG_SUBSJECT = 'Bienvenue dans la liste de diffusion MicroSaaS Maker !'

const createWelcomeMessageText = (nickname: string) => `
Salut ${nickname} !

C'est vraiment un plaisir pour moi de te compter parmi nous !

Si tu es là c'est surement parce que tu souhaites lancer ton MicroSaaS.

Je vais donner le meilleur de moi-même pour t'apporter l'essentiel des connaissances, techniques et outils pour parvenir à cet objectif.

Tu recevras tout ça sans rien faire, directement ici. Penses à vérifier ton dossier spam.

Si tu ne peux pas attendre, fais un tour sur la chaîne youtube : https://www.youtube.com/@microsaasmaker/featured 

... ou contacte moi directement si tu as des questions spécifiques (j'essai de répondre à tout le monde en fonction de la charge): https://microsaasmaker.com/contact

A très vite,
Aurel, un MicroSaaS Maker comme toi ;-)


NB : Tu peux te désinscrire à tout moment ici : https://microsaasmaker.com/unsubscribe`

const createWelcomeMessageHtml = (nickname: string) => `
<h3>Salut ${nickname} !</h3>
<p><b>C'est vraiment un plaisir pour moi de te compter parmi nous !</b></p>
<p>Si tu es là c'est surement parce que tu souhaites lancer ton MicroSaaS.</p>
<p>Je vais donner le meilleur de moi-même pour t'apporter l'essentiel des connaissances, techniques et outils pour parvenir à cet objectif.</p>
<p>Tu recevras tout ça sans rien faire, directement ici. Penses à vérifier ton dossier spam.</p>
<p><b>Si tu ne peux pas attendre, fais un tour sur la <a href="https://www.youtube.com/@microsaasmaker/featured">chaîne youtube</a></b></p>
<p>... ou <a href="https://microsaasmaker.com/contact">contacte moi</a> directement si tu as des questions spécifiques <i>(j'essai de répondre à tout le monde en fonction de la charge)</i></p>
<p><b>A très vite,</b></p>
<p><b>Aurel, <i>un MicroSaaS Maker comme toi</i> ;-)</b></p>
<br/>
<br/>
<p><i>Tu peux te désinscrire à tout moment ici : <a href="https://microsaasmaker.com/unsubscribe">se désinscrire</a></i></p>`

export const welcomeEmailFactory = (nickname: string) => {
    return {
        subject: WELCOME_MSG_SUBSJECT,
        text: createWelcomeMessageText(nickname),
        html: createWelcomeMessageHtml(nickname),
    }
}