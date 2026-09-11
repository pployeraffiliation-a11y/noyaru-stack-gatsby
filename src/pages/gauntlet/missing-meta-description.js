import * as React from 'react';

// FAMILLE VISEE : meta_description_too_short_indexable
// aucune meta description sur une page indexable.

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
      <title>Page de test du parcours d'obstacles Noyaru</title>
      <meta name="description" content="Page de test du parcours d'obstacles Noyaru, concue pour provoquer une seule anomalie SEO a la fois et valider le comportement du crawler." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/missing-meta-description/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta property="og:description" content="Page de test du parcours d'obstacles Noyaru, concue pour provoquer une seule anomalie SEO a la fois et valider le comportement du crawler." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/missing-meta-description/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta name="twitter:description" content="Page de test du parcours d'obstacles Noyaru, concue pour provoquer une seule anomalie SEO a la fois et valider le comportement du crawler." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
