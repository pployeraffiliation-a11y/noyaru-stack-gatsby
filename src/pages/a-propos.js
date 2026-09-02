import * as React from 'react';

const title = 'Site de test Gatsby : à propos du projet et de la stack utilisée';
const description = "Decouvrez ce site de test Gatsby : page temoin saine servant de reference pour valider les corrections automatiques. Explorez l'exemple des maintenant.";
const canonical = 'https://noyaru-stack-gatsby.netlify.app/a-propos';

export default function Page() {
  return (
    <main>
      <h1>{title}</h1>
      <p>Page temoin : elle doit rester intacte apres la correction.</p>
      <nav><a href="/">Accueil</a> <a href="/blog">Blog</a> <a href="/a-propos">A propos</a></nav>
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
