import React from "react";

const PourquoiSabonner = () => {
  return (
    <section id="pouquoi_sabonner">
      <h1 className="h1_Abonnement">Pourquoi s'abonner ?</h1>
      <h3 className="h3_Abonnement">Ce que disent nos abonnés :</h3>
      <div className="div_Abonnement">
        <p className="p_Abonnement">
          "Cet abonnement a complètement transformé ma routine d'entraînement.
          Les vidéos sont excellentes !"
        </p>
        <cite className="cite_Abonnement">
          - Marie D., abonnée depuis 6 mois
        </cite>
      </div>
      <div className="div_Abonnement">
        <p className="p_Abonnement">
          "J'adore la variété des exercices proposés. Ça me motive à rester en
          forme !"
        </p>
        <cite className="cite_Abonnement">- Thomas L., abonné depuis 1 an</cite>
      </div>
    </section>
  );
};

export default PourquoiSabonner;

/* Le code présente un composant React appelé PourquoiSabonner,
qui affiche une section expliquant les avantages de s'abonner.
La section comprend un titre principal, un sous-titre, et deux témoignages d'abonnés,
accompagnés de citations sur leur expérience positive avec l'abonnement.
Chaque témoignage est encapsulé dans une balise <div> contenant un paragraphe (<p>) et une citation (<cite>).
Ce composant est exporté pour une utilisation dans d'autres parties de l'application. */
