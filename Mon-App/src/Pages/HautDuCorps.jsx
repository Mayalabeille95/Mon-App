import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import ClementLebrie from "../Components/Hautducorps/ClementLebrie";
import ChristopheLechaptois from "../Components/Hautducorps/ChristopheLechaptois";

const HautDuCorps = () => {
  return (
    <div>
      <Header />
      <ClementLebrie />
      <ChristopheLechaptois />
      <Footer />
    </div>
  );
};

export default HautDuCorps;
