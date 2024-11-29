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
    <ul>
      {machineUsage.map((machine, index) => (
        <li key={index}>
          {machine.name}: {machine.percentage}
        </li>
      ))}
    </ul>
  );
};

export default StatsList;
