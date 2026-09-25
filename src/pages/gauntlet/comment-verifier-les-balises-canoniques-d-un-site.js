import * as React from 'react';

// Guide editorial : verifier les balises canoniques d'un site.
// Page de contenu, correcte sur tous les points SEO.

export default function Page() {
  return (
    <main>
      <h1>Comment verifier les balises canoniques d'un site</h1>
      <p>La balise <code>&lt;link rel="canonical"&gt;</code> indique aux moteurs quelle URL fait autorite lorsqu'un contenu est accessible via plusieurs adresses. Une verification methodique evite les signaux contradictoires qui diluent le crawl et l'indexation.</p>

      <h2>Inspecter le code source page par page</h2>
      <p>La methode la plus directe consiste a ouvrir le code source rendu (et non seulement le HTML brut) et a chercher la balise canonical dans le <code>&lt;head&gt;</code>. Verifiez qu'elle est unique : plusieurs canonicals sur une meme page annulent leur effet. Assurez-vous aussi qu'elle pointe vers une URL absolue et en HTTPS.</p>

      <h2>Confirmer que la cible repond en 200</h2>
      <p>Une canonique doit designer une page qui existe et renvoie un statut 200. Une canonique vers une 404, une redirection ou une page bloquee par robots envoie un signal incoherent. Recoupez chaque cible avec le sitemap et les codes de reponse du serveur.</p>

      <h2>Croiser avec le contenu reel</h2>
      <p>La page canonique doit contenir un contenu equivalent ou proche de la page qui la reference. Une canonique auto-referente (la page pointe vers elle-meme) est le cas standard et sain pour la majorite des URL. Les ecarts trop importants entre source et cible peuvent etre ignores par les moteurs.</p>

      <h2>Automatiser le controle a l'echelle</h2>
      <p>Sur un site volumineux, un crawler qui remonte pour chaque URL sa canonique declaree, le statut de cette cible et la coherence avec le sitemap permet de detecter en masse les anomalies : boucles, chaines, canoniques croisees ou pointant hors domaine.</p>

      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Comment verifier les balises canoniques d'un site</title>
      <meta name="description" content="Guide pratique pour verifier les balises canoniques d'un site : unicite, URL absolue, statut 200 de la cible et coherence avec le sitemap." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Comment verifier les balises canoniques d'un site" />
      <meta property="og:description" content="Guide pratique pour verifier les balises canoniques d'un site : unicite, URL absolue, statut 200 de la cible et coherence avec le sitemap." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Comment verifier les balises canoniques d'un site" />
      <meta name="twitter:description" content="Guide pratique pour verifier les balises canoniques d'un site : unicite, URL absolue, statut 200 de la cible et coherence avec le sitemap." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
