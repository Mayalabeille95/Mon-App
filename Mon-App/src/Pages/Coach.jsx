// src/Pages/Coach.jsx
import React from "react";
import Header from "../Components/Base/Header";
import Footer from "../Components/Base/Footer";
import CoachInfo from "../Components/Coach/CoachInfo";
import CoachSection from "../Components/Coach/CoachSection";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";
import imageHautduCorps from "../Assets/images/musculhaut.jpg";
import imageBasduCorps from "../Assets/images/basducorp.jpg";
import imageCardio from "../Assets/images/social media/cardio - Copie copy.jpg";

function Coach() {
  return (
    <div>
      <Header />

      <CoachInfo />

      <br />

      <CoachSection
        image={imageHautduCorps}
        altText="coach spécialisé haut du corps"
        link="/Hautducorps"
        title="Coach Haut du Corps"
      />

      <CoachSection
        image={imageBasduCorps}
        altText="musculhaut"
        link="Basducorps"
        title="Coach Bas du Corps"
      />

      <CoachSection
        image={imageCardio}
        altText="musculhaut"
        link="Cardio"
        title="Coach Cardio"
      />

      <Footer />
      <RedirectionHaut />
    </div>
  );
}

export default Coach;
