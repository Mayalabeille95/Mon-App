// StatsTable.jsx
import React from "react";

const StatsTable = () => {
  const membersData = [
    {
      name: "Jean Dupont",
      age: 30,
      activity: "Musculation",
      hoursPerWeek: "8.5 heures",
    },
    {
      name: "Marie Martin",
      age: 25,
      activity: "Cardio",
      hoursPerWeek: "9.8 heures",
    },
    {
      name: "Lucas Bernard",
      age: 22,
      activity: "Crossfit",
      hoursPerWeek: "5.5 heures",
    },
    {
      name: "Sophie Lambert",
      age: 28,
      activity: "Yoga",
      hoursPerWeek: "3.5 heures",
    },
    {
      name: "Emilie Fabre",
      age: 34,
      activity: "Aquagym",
      hoursPerWeek: "2 heures",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Âge</th>
          <th>Activité Préférée</th>
          <th>Heures d'Entraînement / Semaine</th>
        </tr>
      </thead>
      <tbody>
        {membersData.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.activity}</td>
            <td>{member.hoursPerWeek}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;
