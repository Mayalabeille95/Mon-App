import React from "react";

const QuestionFrequente = () => {
  return (
    <section id="question-fréquente">
      <h2 className="h2Abonnement">Questions fréquentes</h2>
      <details className="detailsAbonnement">
        <summary className="summaryAbonnement">
          Comment puis-je annuler mon abonnement ?
        </summary>
        <p className="pAbonnement">
          Vous pouvez annuler votre abonnement à tout moment depuis votre espace
          membre. L'annulation prendra effet à la fin de votre période de
          facturation en cours.
        </p>
      </details>
      <details className="detailsAbonnement">
        <summary className="summaryAbonnement">
          Puis-je changer de formule d'abonnement ?
        </summary>
        <p className="pAbonnement">
          Oui, vous pouvez changer de formule à tout moment. Le changement
          prendra effet immédiatement, avec un ajustement au prorata de votre
          facturation.
        </p>
      </details>
    </section>
  );
};

export default QuestionFrequente;

/* Le code présente un composant React appelé QuestionFrequente,
qui affiche une section contenant des réponses aux questions fréquemment posées.
 Chaque question est affichée sous forme de <summary> dans une balise <details>,
  et chaque réponse est contenue dans un paragraphe (<p>). 
  Les deux questions abordées sont "Comment annuler mon abonnement ?" et "Puis-je changer de formule d'abonnement ?", 
  avec des explications sur les procédures correspondantes. Ce composant est exporté pour être utilisé dans d'autres parties de l'application. */
