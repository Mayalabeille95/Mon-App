import React from "react";

const Faq = () => {
  return (
    <section id="faq-extrait">
      <div className="zone-de-texte2">
        <h2>FAQ</h2>
        <ul>
          <li>Proposez-vous des séances d'essais gratuites ?</li>
          <li>Y'a t-il des frais d'inscription ?</li>
          <li>Quels cours proposez-vous ?</li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;

// Le code définit un composant React appelé `Faq`, qui rend une section contenant
// un extrait de questions fréquemment posées (FAQ). La section comprend un titre (`h2`)
// et une liste (`<ul>`) de trois questions : "Proposez-vous des séances d'essais gratuites ?",
// "Y'a-t-il des frais d'inscription ?", et "Quels cours proposez-vous ?". La classe CSS `zone-de-texte2`
// est appliquée à la `div` qui contient le titre et la liste. Ce composant est ensuite exporté pour être utilisé
// dans d'autres parties de l'application.
