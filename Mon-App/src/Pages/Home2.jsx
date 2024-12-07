import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";
import InfoSection from "../Components/Accueil/InfoSection";
import OffreEtudiant from "../Components/Accueil/OffreEtudiant";
import OffreCoaching from "../Components/Accueil/OffreCoaching";
import NotreEquipe from "../Components/Accueil/NotreEquipe";

import Faq from "../Components/Accueil/Faq";

function Home2() {
  return (
    <div>
      <Header />
      <InfoSection />
      <OffreEtudiant />
      <OffreCoaching />
      <NotreEquipe />
      <Faq />
      <Footer />
      <RedirectionHaut />
    </div>
  );
}

export default Home2;
