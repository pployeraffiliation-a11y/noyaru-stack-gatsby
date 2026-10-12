import * as React from 'react';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Parcours Noyaru : duplicate-a, page avec titre double</title>
      <meta name="description" content="Page duplicate-a du parcours d'obstacles Gatsby : elle cible la famille des doublons de meta description et porte desormais une description unique et distincte." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Parcours Noyaru : duplicate-a, page avec titre double" />
      <meta property="og:description" content="Page duplicate-a du parcours d'obstacles Gatsby : elle cible la famille des doublons de meta description et porte desormais une description unique et distincte." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Parcours Noyaru : duplicate-a, page avec titre double" />
      <meta name="twitter:description" content="Page duplicate-a du parcours d'obstacles Gatsby : elle cible la famille des doublons de meta description et porte desormais une description unique et distincte." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
