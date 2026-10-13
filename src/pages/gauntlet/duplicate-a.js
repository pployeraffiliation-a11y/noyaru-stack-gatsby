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
      <title>Deux pages qui portent exactement le meme titre pour le test</title>
      <meta name="description" content="Parcours d'obstacles, cas « duplicate-a » : cette page teste la detection des meta descriptions dupliquees lors du recrawl automatique du correcteur SEO." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Deux pages qui portent exactement le meme titre pour le test" />
      <meta property="og:description" content="Parcours d'obstacles, cas « duplicate-a » : cette page teste la detection des meta descriptions dupliquees lors du recrawl automatique du correcteur SEO." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-a/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Deux pages qui portent exactement le meme titre pour le test" />
      <meta name="twitter:description" content="Parcours d'obstacles, cas « duplicate-a » : cette page teste la detection des meta descriptions dupliquees lors du recrawl automatique du correcteur SEO." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
