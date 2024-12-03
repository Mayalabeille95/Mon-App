import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import Coachinf from "../Components/Cardio/Coachinf";
import BoxCont from "../Components/Cardio/BoxCont";
import Results from "../Components/Cardio/Resulta";
import Diplome from "../Components/Cardio/Diplomes";

const Cardio = () => {
  return (
    <div>
      <Header />
      <Coachinf />
      <BoxCont />
      <Results />
      <Diplome />
      <Footer />
    </div>
  );
};

export default Cardio;
