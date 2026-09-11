import * as React from 'react';

// FAMILLE VISEE : more_than_one_page_for_same_language_in_hreflang
// deux annotations hreflang pour le meme code, vers deux pages differentes.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Test hreflang : deux annotations pour la meme langue</title>
      <meta name="description" content="Page de test hreflang : deux annotations hreflang pointent vers le meme code de langue fr mais vers deux pages differentes, pour declencher cette anomalie" />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-same-language/" />
      <link rel="alternate" hreflang="fr" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-same-language/" />
      <link rel="alternate" hreflang="fr" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/canonical-http/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta property="og:description" content="Page de test hreflang : deux annotations hreflang pointent vers le meme code de langue fr mais vers deux pages differentes, pour declencher cette anomalie precise." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-same-language/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta name="twitter:description" content="Page de test hreflang : deux annotations hreflang pointent vers le meme code de langue fr mais vers deux pages differentes, pour declencher cette anomalie precise." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
