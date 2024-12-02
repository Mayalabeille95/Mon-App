import React from "react";
import HeaderComponent from "../Components/Coach/HeaderComponent";
import HautDuCorpComponent from "../Components/Coach/HautDuCorpComponent";
import CardioComponent from "../Components/Coach/CardioComponent";
import BasDuCorpComponent from "../Components/Coach/BasDuCorpComponent";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";

const CoachPage = () => {
  return (
    <div>
      <Header />
      <HeaderComponent />
      <HautDuCorpComponent />
      <CardioComponent />
      <BasDuCorpComponent />
      <Footer />
    </div>
  );
};

export default CoachPage;
