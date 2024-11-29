import React from "react";

const QuestionFrequente = () => {
  return (
    <section id="question-fréquente">
      <h2>Questions fréquentes</h2>
      <details>
        <summary>Comment puis-je annuler mon abonnement ?</summary>
        <p>
          Vous pouvez annuler votre abonnement à tout moment depuis votre espace
          membre. L'annulation prendra effet à la fin de votre période de
          facturation en cours.
        </p>
      </details>
      <details>
        <summary>Puis-je changer de formule d'abonnement ?</summary>
        <p>
          Oui, vous pouvez changer de formule à tout moment. Le changement
          prendra effet immédiatement, avec un ajustement au prorata de votre
          facturation.
        </p>
      </details>
    </section>
  );
};

export default QuestionFrequente;
