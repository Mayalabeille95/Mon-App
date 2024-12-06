import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import ClementLebrie from "../Components/Hautducorps/ClementLebrie";
import ChristopheLechaptois from "../Components/Hautducorps/ChristopheLechaptois";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

const HautDuCorps = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <ClementLebrie />
        <ChristopheLechaptois />
      </div>
      <Footer />
      <RedirectionHaut />
    </div>
  );
};

export default HautDuCorps;
