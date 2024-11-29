// StatSection.jsx
import React from "react";
import StatsList from "./StatsList";
import StatsTable from "./StatsTable";

const StatSection = () => {
  return (
    <div className="container">
      {/* Section des statistiques des membres */}
      <section className="stat-section">
        <h2>Statistiques des Membres les plus actifs de GYM Attack</h2>
        <StatsTable />
      </section>

      {/* Section de la fréquentation globale */}
      <section className="stat-section">
        <h2>Fréquentation Globale</h2>
        <ul>
          <li>
            Nombre total de membres : <strong>350</strong>
          </li>
          <li>
            Moyenne d'heures d'entraînement par semaine :{" "}
            <strong>6.4 heures</strong>
          </li>
          <li>
            Taux de rétention des membres : <strong>85%</strong>
          </li>
          <li>
            Moyenne d'âge des membres : <strong>29 ans</strong>
          </li>
          <li>
            Proportion Hommes : <strong>58%</strong>
          </li>
          <li>
            Proportion Femmes : <strong>42%</strong>
          </li>
        </ul>
      </section>

      {/* Section des machines les plus utilisées */}
      <section className="stat-section">
        <h2>Machines les Plus Utilisées</h2>
        <StatsList />
      </section>

      {/* Section des classes de fitness */}
      <section className="stat-section">
        <h2>Participation aux Classes de Fitness</h2>
        <StatsTable />
      </section>

      {/* Section des meilleurs membres */}
      <section className="stat-section">
        <h2>Meilleurs Membres de la Semaine</h2>
        <ul>
          <li>
            <strong>Jean Dupont</strong> - 8.5 heures d'entraînement
          </li>
          <li>
            <strong>Marie Martin</strong> - 9.8 heures d'entraînement
          </li>
          <li>
            <strong>Thomas Durand</strong> - 9.5 heures d'entraînement
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StatSection;
