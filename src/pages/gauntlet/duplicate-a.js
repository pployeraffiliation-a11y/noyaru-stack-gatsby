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
      <title>Page A du parcours d'obstacles Noyaru — jumelle unique</title>
      <meta name="description" content="Page A du parcours d'obstacles : premiere des deux pages jumelles, avec une meta description propre et unique pour eviter tout doublon au crawl." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Page A du parcours d'obstacles Noyaru — jumelle unique" />
      <meta property="og:description" content="Page A du parcours d'obstacles : premiere des deux pages jumelles, avec une meta description propre et unique pour eviter tout doublon au crawl." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Page A du parcours d'obstacles Noyaru — jumelle unique" />
      <meta name="twitter:description" content="Page A du parcours d'obstacles : premiere des deux pages jumelles, avec une meta description propre et unique pour eviter tout doublon au crawl." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
