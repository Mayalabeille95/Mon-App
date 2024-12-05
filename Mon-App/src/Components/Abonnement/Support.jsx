import React from "react";

const Support = () => {
  return (
    <section id="_support">
      <h3> Besoin d'aide ?</h3>
      <p className="p_Abonnement">
        Notre équipe de support est là pour vous aider !
      </p>
      <a href="/Contact" className="_button">
        Contactez-nous
      </a>
    </section>
  );
};

export default Support;

/* Le code présente un composant React appelé Support, 
qui affiche une section offrant de l'aide aux utilisateurs. 
La section contient un titre (h3), un texte d'introduction (p),
 et un lien cliquable (<a>) qui redirige vers une page de contact (NousContacter.html).
  Ce lien est stylisé comme un bouton grâce à la classe CSS button. 
  Ce composant est exporté pour être utilisé dans d'autres parties de l'application. */
