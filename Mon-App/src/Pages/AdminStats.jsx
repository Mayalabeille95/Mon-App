import React from "react";
import StatSection from "../Components/AdminStats/StatSection";
import ChartSection from "../Components/AdminStats/ChartsSection";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";
import gymlogo from "../Assets/images/gym-logo1.png";

const AdminStats = () => {
  return (
    <div className="admin-stats">
      <a className="logo" href="/Home">
        <img className="logo" src={gymlogo} alt="logo de salle de sport" />
      </a>
      <h1 className="admin-stats__title">Statistiques GYM Attack</h1>
      <StatSection />
      <ChartSection />
      <RedirectionHaut />
    </div>
  );
};

export default AdminStats;
