import * as React from 'react';

// FAMILLE VISEE : double_slash_in_url
// lien interne avec une double barre.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : double slash</h1>
      <p>Cette page du parcours traite le cas « double slash ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="//noyaru-stack-gatsby.netlify.app/a-propos">A propos</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Double Slash dans l'URL - Parcours d'obstacles Noyaru</title>
      <meta name="description" content="Découvrez le parcours d'obstacles avec un double slash dans l'URL, une anomalie unique à explorer pour les développeurs." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/double-slash/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta property="og:description" content="Découvrez le parcours d'obstacles avec un double slash dans l'URL, une anomalie unique à explorer pour les développeurs." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/double-slash/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta name="twitter:description" content="Découvrez le parcours d'obstacles avec un double slash dans l'URL, une anomalie unique à explorer pour les développeurs." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
