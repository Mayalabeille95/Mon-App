import React from "react";

const RedirectionHaut = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="redirection-haut-container">
      <button
        className="redirection-haut-button"
        title="Retour en haut"
        onClick={scrollToTop}
      >
        ↑ Haut
      </button>
    </div>
  );
};

export default RedirectionHaut;

/*
Le composant RedirectionHaut crée un bouton de retour en haut de page.
Il définit une fonction scrollToTop qui utilise window.scrollTo pour faire 
défiler la page vers le haut de manière fluide. Le composant rend un bouton avec 
le texte "↑ Haut" et un titre explicatif. Lorsque l'utilisateur clique sur ce bouton, 
la fonction scrollToTop est appelée, permettant une navigation rapide et pratique vers 
le haut de la page. Ce composant améliore l'expérience utilisateur, particulièrement sur les pages longues.
*/
