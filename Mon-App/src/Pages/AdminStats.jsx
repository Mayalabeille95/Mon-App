import React from "react";
import StatSection from "../Components/AdminStats/StatSection";
import ChartSection from "../Components/AdminStats/ChartsSection";

const AdminStats = () => {
  return (
    <div>
      <h1>Statistiques GYM Attack</h1>
      <StatSection />
      <ChartSection />
    </div>
  );
};

export default AdminStats;
