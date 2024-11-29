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
