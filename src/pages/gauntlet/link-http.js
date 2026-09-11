import * as React from 'react';

// FAMILLE VISEE : https_page_has_internal_links_to_http
// lien interne ecrit en http.

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="https://noyaru-stack-gatsby.netlify.app/a-propos">A propos</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <title>Page de test du parcours d'obstacles Noyaru - Double Slash</title>
      <meta name="description" content="Découvrez le parcours d'obstacles unique de Noyaru, conçu pour tester vos compétences et vous divertir." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/link-http/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta property="og:description" content="Découvrez le parcours d'obstacles unique de Noyaru, conçu pour tester vos compétences et vous divertir." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/link-http/" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
      <meta name="twitter:description" content="Découvrez le parcours d'obstacles unique de Noyaru, conçu pour tester vos compétences et vous divertir." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
