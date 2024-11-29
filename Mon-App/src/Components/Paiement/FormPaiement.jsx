import React, { useState } from "react";
import ModePaiement from "./ModePaiement";
import PaiementCarte from "./PaiementCarte";
import PaiementPrelevement from "./PaiementPrelevement";
import CodePromo from "./CodePromo";

const FormPaiement = () => {
  const [modePaiement, setModePaiement] = useState("carte");

  const handleModeChange = (event) => {
    setModePaiement(event.target.value);
  };

  return (
    <form action="/process-payment" method="post">
      <ModePaiement
        modePaiement={modePaiement}
        handleModeChange={handleModeChange}
      />

      {/* PaiementCarte est affiché par défaut */}
      {modePaiement === "carte" && <PaiementCarte />}

      {/* PaiementPrelevement est affiché si le modePaiement est "prelevement" */}
      {modePaiement === "prelevement" && <PaiementPrelevement />}

      <CodePromo />

      <div className="paiement">
        <button className="button-confirmer">
          <input type="submit" value="Payer maintenant" />
        </button>
      </div>
    </form>
  );
};

export default FormPaiement;

/*
Le composant FormPaiement gère le processus de paiement en permettant aux utilisateurs 
de choisir entre différentes méthodes de paiement. Il utilise le hook useState pour 
suivre le mode de paiement sélectionné, avec des sous-composants pour le paiement par 
carte et par prélèvement. En fonction du mode choisi, le formulaire affiche dynamiquement
 les champs appropriés et inclut également une section pour entrer un code promotionnel. 
 Ce design interactif et modulaire améliore l'expérience utilisateur en rendant le processus de paiement clair et accessible.
*/
