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
