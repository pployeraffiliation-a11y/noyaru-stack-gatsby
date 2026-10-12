import * as React from 'react';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : duplicate b</h1>
      <p>Cette page du parcours traite le cas « duplicate b ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Parcours Noyaru : duplicate-b, variante du titre duplique</title>
      <meta name="description" content="Page duplicate-b du parcours d'obstacles : variante distincte de duplicate-a, concue pour valider la detection et la correction des meta descriptions" />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-b/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Parcours Noyaru : duplicate-b, variante du titre duplique" />
      <meta property="og:description" content="Page duplicate-b du parcours d'obstacles : variante distincte de duplicate-a, concue pour valider la detection et la correction des meta descriptions dupliquees." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/duplicate-b/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Parcours Noyaru : duplicate-b, variante du titre duplique" />
      <meta name="twitter:description" content="Page duplicate-b du parcours d'obstacles : variante distincte de duplicate-a, concue pour valider la detection et la correction des meta descriptions dupliquees." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
