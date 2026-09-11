import * as React from 'react';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

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
      <title>Parcours d'obstacles Noyaru — page jumelle A (variante A)</title>
      <meta name="description" content="Premiere page jumelle du parcours d'obstacles (variante A) : contenu dedie servant a illustrer et tester la detection des meta descriptions dupliquees." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Parcours d'obstacles Noyaru — page jumelle A (variante A)" />
      <meta property="og:description" content="Premiere page jumelle du parcours d'obstacles (variante A) : contenu dedie servant a illustrer et tester la detection des meta descriptions dupliquees." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Parcours d'obstacles Noyaru — page jumelle A (variante A)" />
      <meta name="twitter:description" content="Premiere page jumelle du parcours d'obstacles (variante A) : contenu dedie servant a illustrer et tester la detection des meta descriptions dupliquees." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
