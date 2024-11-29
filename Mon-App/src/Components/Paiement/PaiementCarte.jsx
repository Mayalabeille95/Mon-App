import React from "react";

const PaiementCarte = () => {
  return (
    <section id="section-carte">
      <h2>Paiement par carte bancaire</h2>
      <div>
        <label htmlFor="numero_carte">Numéro de carte :</label>
        <input
          type="text"
          id="numero_carte"
          name="numero_carte"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <div>
        <label htmlFor="date_expiration">Date d'expiration :</label>
        <input
          type="text"
          id="date_expiration"
          name="date_expiration"
          placeholder="MM/AA"
          required
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV :</label>
        <input type="text" id="cvv" name="cvv" placeholder="123" required />
      </div>
    </section>
  );
};

export default PaiementCarte;
