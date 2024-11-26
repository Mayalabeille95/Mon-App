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
