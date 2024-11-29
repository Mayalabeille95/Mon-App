import React from "react";

const PaiementPrelevement = () => {
  return (
    <section id="section-prelevement">
      <h2>Prélèvement automatique</h2>
      <div>
        <label htmlFor="iban">IBAN :</label>
        <input
          type="text"
          id="iban"
          name="iban"
          placeholder="FR76 1234 5678 9012 3456 7890 123"
        />
      </div>
      <div>
        <label htmlFor="bic">BIC :</label>
        <input type="text" id="bic" name="bic" placeholder="ABCDEFGHIJK" />
      </div>
    </section>
  );
};

export default PaiementPrelevement;

/*
Le composant PaiementPrelevement permet aux utilisateurs de saisir les informations nécessaires
pour un prélèvement automatique. Il comprend des champs pour l'IBAN et le BIC, qui sont essentiels
pour effectuer des transactions bancaires. Les labels associés à chaque champ améliorent l'accessibilité
et aident les utilisateurs à comprendre quelles informations doivent être fournies. Ce composant est crucial
dans le cadre du processus de paiement, offrant une alternative au paiement par carte bancaire et s'adaptant ainsi aux préférences des utilisateurs.
*/
