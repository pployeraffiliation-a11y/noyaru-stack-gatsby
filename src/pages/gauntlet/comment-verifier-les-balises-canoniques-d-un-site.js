import * as React from 'react';

// FAMILLE VISEE : verifier_balises_canoniques
// Cette page traite de la vérification des balises canoniques d'un site.

export default function Page() {
  return (
    <main>
      <h1>Comment vérifier les balises canoniques d'un site</h1>
      <p>La vérification des balises canoniques est essentielle pour s'assurer que les moteurs de recherche comprennent quelle version d'une page doit être indexée. Pour cela, il existe plusieurs méthodes efficaces.</p>
      <p>Tout d'abord, vous pouvez utiliser des outils en ligne comme Screaming Frog ou SEMrush, qui analysent votre site et vous fournissent un rapport sur les balises canoniques présentes. Ensuite, vous pouvez également vérifier manuellement le code source de vos pages en utilisant l'inspecteur d'éléments de votre navigateur.</p>
      <p>Enfin, il est recommandé de s'assurer que chaque page a une balise canonique unique et qu'elle pointe vers la version correcte de la page. Cela aide à éviter les problèmes de contenu dupliqué et à améliorer le référencement de votre site.</p>
      <p><a href="/">Retour à l'accueil</a></p>
    </main>
  );
}

// Gatsby Head API — l'idiome de cette stack. `next/head` n'existe pas ici.
export function Head() {
  return (
    <>  
      <meta name="viewport" content="width=device-width" />
      <title>Vérification des balises canoniques - Noyaru</title>
      <meta name="description" content="Cette page explique comment vérifier les balises canoniques d'un site pour optimiser le référencement et éviter le contenu dupliqué." />
      <link rel="canonical" href="https://noyaru-stack-gatsby.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Vérification des balises canoniques - Noyaru" />
      <meta property="og:description" content="Cette page explique comment vérifier les balises canoniques d'un site pour optimiser le référencement et éviter le contenu dupliqué." />
      <meta property="og:url" content="https://noyaru-stack-gatsby.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
      <meta property="og:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vérification des balises canoniques - Noyaru" />
      <meta name="twitter:description" content="Cette page explique comment vérifier les balises canoniques d'un site pour optimiser le référencement et éviter le contenu dupliqué." />
      <meta name="twitter:image" content="https://noyaru-stack-gatsby.netlify.app/og.png" />
    </>
  );
}
