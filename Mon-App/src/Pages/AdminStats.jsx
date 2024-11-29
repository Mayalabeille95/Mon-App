import React from "react";
import StatSection from "../Components/AdminStats/StatSection";
import ChartSection from "../Components/AdminStats/ChartsSection";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

const AdminStats = () => {
  return (
    <div className="admin-stats">
      <h1 className="admin-stats__title">Statistiques GYM Attack</h1>
      <StatSection />
      <ChartSection />
      <RedirectionHaut />
    </div>
  );
};

export default AdminStats;
