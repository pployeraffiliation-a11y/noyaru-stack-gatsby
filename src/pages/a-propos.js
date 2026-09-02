import * as React from 'react';

const title = 'À propos de notre site de test Gatsby : démo, guide & exemples';
const description = "Site de test Gatsby : decouvrez cette page temoin de la fixture, exemple concret pour explorer, tester et valider vos integrations en toute simplicite.";
const canonical = 'https://noyaru-stack-gatsby.netlify.app/a-propos/';

export default function Page() {
  return (
    <main>
      <h1>{title}</h1>
      <p>Page temoin : elle doit rester intacte apres la correction.</p>
      <nav><a href="/">Accueil</a> <a href="/blog/">Blog</a> <a href="/a-propos/">A propos</a></nav>
    </main>
  );
}

// Gatsby Head API — the idiom the corrector must write here. `next/head` does not exist in a
// Gatsby project and importing it breaks the build; that was the real bug this stack revealed.
export function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
