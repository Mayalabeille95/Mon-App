import React from "react";

const QuestionFrequente = () => {
  return (
    <section id="question_fréquente">
      <h2 className="h2_Abonnement">Questions fréquentes</h2>
      <details className="details_Abonnement">
        <summary className="summary_Abonnement">
          Comment puis-je annuler mon abonnement ?
        </summary>
        <p className="p_Abonnement">
          Vous pouvez annuler votre abonnement à tout moment depuis votre espace
          membre. L'annulation prendra effet à la fin de votre période de
          facturation en cours.
        </p>
      </details>
      <details className="details_Abonnement">
        <summary className="summary_Abonnement">
          Puis-je changer de formule d'abonnement ?
        </summary>
        <p className="p_Abonnement">
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
