import React from "react";

const ResultsList = () => {
  return (
    <div>
      {/* Titre de la section /}
      <h2>Les Résultats Que Tu Peux Attendre :</h2>

      {/ Liste des résultats */}
      <ul>
        <li>
          <strong>Des jambes plus musclées et plus toniques :</strong> Renforce
          tes quadriceps, ischio-jambiers et mollets pour des jambes puissantes
          et bien dessinées.
        </li>
        <li>
          <strong>Des fessiers fermes et sculptés :</strong> Travail ciblé pour
          développer des fessiers plus hauts, plus ronds et plus toniques.
        </li>
        <li>
          <strong>Une meilleure posture et stabilité :</strong> Renforce la
          chaîne postérieure (dos, fessiers, jambes) pour une posture plus
          droite et plus équilibrée.
        </li>
      </ul>
    </div>
  );
};

export default ResultsList;
