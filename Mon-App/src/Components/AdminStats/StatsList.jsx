// StatsList.jsx
import React from "react";

const StatsList = () => {
  const machineUsage = [
    { name: "Musculation", percentage: "30%" },
    { name: "Tapis de course", percentage: "28%" },
    { name: "Haltères", percentage: "18%" },
    { name: "Vélo elliptique", percentage: "12%" },
    { name: "Banc de musculation", percentage: "9%" },
    { name: "Rameur", percentage: "3%" },
  ];

  return (
    <ul className="stats-list">
      {machineUsage.map((machine, index) => (
        <li key={index} className="stats-list__item">
          {machine.name}: {machine.percentage}
        </li>
      ))}
    </ul>
  );
};

export default StatsList;

/*
Composant StatsList pour GYM Attack affichant une liste d'utilisation des machines :
Utilise un tableau d'objets pour stocker les données des machines
Génère une liste non ordonnée avec le nom de la machine et son pourcentage d'utilisation
Utilise la méthode map pour créer dynamiquement les éléments de la liste
*/
