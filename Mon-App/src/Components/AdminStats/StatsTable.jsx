// StatsTable.jsx
import React from "react";

const StatsTable = () => {
  const tableData = [
    { member: "Jean Dupont", sessions: 12, totalHours: 20 },
    { member: "Marie Martin", sessions: 9, totalHours: 15 },
    { member: "Lucas Bernard", sessions: 7, totalHours: 12 },
    { member: "Sophie Lambert", sessions: 6, totalHours: 10 },
  ];

  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Membre</th>
          <th>Nombre de séances</th>
          <th>Heures totales</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.member}</td>
            <td>{row.sessions}</td>
            <td>{row.totalHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;

/*
Le composant StatsTable présente les statistiques détaillées des membres les plus actifs de GYM Attack.
Il affiche un tableau dynamique qui inclut le nom des membres, le nombre de séances qu'ils ont effectuées 
et le total d'heures d'entraînement. Les données sont stockées dans un tableau d'objets, 
ce qui permet une mise à jour facile et flexible des informations. 
Le composant utilise la méthode map() pour générer automatiquement les lignes du tableau,
 assurant une présentation claire et structurée. Ce design est également responsive et peut être réutilisé 
 dans différentes sections pour afficher d'autres statistiques.
*/
