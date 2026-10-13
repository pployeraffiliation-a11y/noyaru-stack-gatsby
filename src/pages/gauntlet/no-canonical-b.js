import * as React from 'react';

// FAMILLE VISEE : duplicate_pages_without_canonical
// jumelle de no-canonical-a.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : pages jumelles</h1>
      <p>Cette page du parcours traite le cas « pages jumelles ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/no-canonical-a/" />
      <title>Parcours Noyaru : page jumelle B sans canonical declare</title>
      <meta name="description" content="Page jumelle B du parcours d'obstacles : contenu identique a la page A, sans canonical declare, pour que la famille duplicate pages se declenche." />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Parcours Noyaru : page jumelle B sans canonical declare" />
      <meta property="og:description" content="Page jumelle B du parcours d'obstacles : contenu identique a la page A, sans canonical declare, pour que la famille duplicate pages se declenche." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/no-canonical-a/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Parcours Noyaru : page jumelle B sans canonical declare" />
      <meta name="twitter:description" content="Page jumelle B du parcours d'obstacles : contenu identique a la page A, sans canonical declare, pour que la famille duplicate pages se declenche." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
