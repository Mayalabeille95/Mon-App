import React from "react";
import RecapCommande from "./RecapCommande";
import FormPaiement from "./FormPaiement";

const PaiementContainer = () => {
  return (
    <div id="papa-paiement">
      <div id="container-paiement">
        <RecapCommande />
        <FormPaiement />
      </div>
    </div>
  );
};

export default PaiementContainer;
