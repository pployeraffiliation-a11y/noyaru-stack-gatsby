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
      <title>Deux pages jumelles sans canonical declare</title>
      <meta name="description" content="Variante jumelle sans balise canonical : cette page reproduit le scenario de duplication pour que le correcteur identifie l'absence de canonical et leve" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Deux pages jumelles sans canonical declare" />
      <meta property="og:description" content="Variante jumelle sans balise canonical : cette page reproduit le scenario de duplication pour que le correcteur identifie l'absence de canonical et leve l'anomalie." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/no-canonical-b/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Deux pages jumelles sans canonical declare" />
      <meta name="twitter:description" content="Variante jumelle sans balise canonical : cette page reproduit le scenario de duplication pour que le correcteur identifie l'absence de canonical et leve l'anomalie." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
