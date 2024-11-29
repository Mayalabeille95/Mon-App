import React from "react";

const ModePaiement = ({ modePaiement, handleModeChange }) => {
  return (
    <section>
      <h2>Mode de paiement</h2>
      <div>
        <input
          type="radio"
          id="carte"
          name="mode_paiement"
          value="carte"
          checked={modePaiement === "carte"}
          onChange={handleModeChange}
        />
        <label htmlFor="carte">Carte bancaire</label>
      </div>
      <div>
        <input
          type="radio"
          id="prelevement"
          name="mode_paiement"
          value="prelevement"
          checked={modePaiement === "prelevement"}
          onChange={handleModeChange}
        />
        <label htmlFor="prelevement">Prélèvement automatique</label>
      </div>
    </section>
  );
};

export default ModePaiement;
