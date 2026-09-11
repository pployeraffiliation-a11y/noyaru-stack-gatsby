import * as React from 'react';

// FAMILLE VISEE : hreflang_to_non_canonical
// hreflang pointant vers une page dont le canonical est ailleurs.

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
      <title>Test hreflang vers page non-canonique | Noyaru</title>
      <meta name="description" content="Page de test hreflang vers non-canonique : un lien hreflang pointe ici vers une page dont la balise canonical designe une autre URL, pour isoler cette anomalie." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-to-non-canonical/" />
      <link rel="alternate" hreflang="fr" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-to-non-canonical/" />
      <link rel="alternate" hreflang="en" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/canonical-other/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Test hreflang vers page non-canonique | Noyaru" />
      <meta property="og:description" content="Page de test hreflang vers non-canonique : un lien hreflang pointe ici vers une page dont la balise canonical designe une autre URL, pour isoler cette anomalie." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/hreflang-to-non-canonical/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Test hreflang vers page non-canonique | Noyaru" />
      <meta name="twitter:description" content="Page de test hreflang vers non-canonique : un lien hreflang pointe ici vers une page dont la balise canonical designe une autre URL, pour isoler cette anomalie." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
