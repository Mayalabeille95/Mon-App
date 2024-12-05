import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";
import LocalisationForm from "../Components/Accueil/LocalisationForm";
import InfoSection from "../Components/Accueil/InfoSection";
import OffreEtudiant from "../Components/Accueil/OffreEtudiant";
import OffreCoaching from "../Components/Accueil/OffreCoaching";
import Faq from "../Components/Accueil/Faq";
import ThemeSelector from "../Components/Accueil/ThemeSelector";

function Home() {
  return (
    <div>
      <Header />
      <ThemeSelector />
      <LocalisationForm />
      <InfoSection />
      <OffreEtudiant />
      <OffreCoaching />
      <Faq />
      <Footer />
      <RedirectionHaut />
    </div>
  );
}

export default Home;
