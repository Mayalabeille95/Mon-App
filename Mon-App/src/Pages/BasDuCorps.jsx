import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import Coachinfo from "../Components/Basducorps/CoachInfo";
import BoxContainer from "../Components/Basducorps/BoxContainer";
import ResultsList from "../Components/Basducorps/ResultsList";
import QualificationList from "../Components/Basducorps/QualificationsList";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

const BasDuCorps = () => {
  return (
    <div>
      <Header />
      <Coachinfo />
      <BoxContainer />
      <ResultsList />
      <QualificationList />
      <Footer />
      <RedirectionHaut />
    </div>
  );
};

export default BasDuCorps;
