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

/*
Le composant PaiementContainer sert de conteneur principal pour le processus de paiement.
Il intègre deux sous-composants : RecapCommande, qui affiche un récapitulatif des articles ou services commandés,
et FormPaiement, qui gère les détails du paiement. Cette structure permet de séparer clairement les différentes
étapes du processus de paiement, offrant ainsi une interface utilisateur organisée et intuitive. En regroupant ces éléments,
le composant facilite la navigation et l'interaction des utilisateurs lors de la finalisation de leur commande.
*/
