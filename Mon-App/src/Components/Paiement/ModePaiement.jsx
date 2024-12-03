import React from "react";

const ModePaiement = ({ modePaiement, handleModeChange }) => {
  return (
    <section>
      <h2 className="h2Paiement">Mode de paiement</h2>
      <div className="divPaiement">
        <input
          type="radio"
          id="carte"
          name="mode_paiement"
          value="carte"
          checked={modePaiement === "carte"}
          onChange={handleModeChange}
        />
        <label className="labelPaiement" htmlFor="carte">
          Carte bancaire
        </label>
      </div>
      <div className="divPaiement">
        <input
          type="radio"
          id="prelevement"
          name="mode_paiement"
          value="prelevement"
          checked={modePaiement === "prelevement"}
          onChange={handleModeChange}
        />
        <label className="labelPaiement" htmlFor="prelevement">
          Prélèvement automatique
        </label>
      </div>
    </section>
  );
};

export default ModePaiement;

/*
Le composant ModePaiement permet aux utilisateurs de sélectionner leur méthode de paiement
préférée entre carte bancaire et prélèvement automatique. Il utilise des boutons radio pour
afficher les options, en s'assurant que l'option sélectionnée est correctement marquée grâce à la propriété checked.
Le composant reçoit le mode de paiement actuel et une fonction de gestion des changements comme props, permettant de mettre à jour
l'état dans le composant parent. Cette approche garantit une expérience utilisateur fluide et intuitive lors du choix du mode de paiement.
*/
