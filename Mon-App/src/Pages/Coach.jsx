// src/Pages/Coach.jsx
import React from "react";
import Header from "../Components/Base/Header";
import Footer from "../Components/Base/Footer";
import CoachInfo from "../Components/Coach/CoachInfo";
import CoachSection from "../Components/Coach/CoachSection";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

function Coach() {
  return (
    <div>
      <Header />

      <CoachInfo />

      <br />

      <CoachSection
        image="../Assets/images/hautducorp.jpg"
        altText="musculhaut"
        link="Hautducorps.html"
        title="Coach Haut du Corps"
      />

      <CoachSection
        image="../Assets/images/basducorp.jpg"
        altText="musculhaut"
        link="Basducorp.html"
        title="Coach Bas du Corps"
      />

      <CoachSection
        image="../Assets/images/cardio - Copie.jpg"
        altText="musculhaut"
        link="Cardio.html"
        title="Coach Cardio"
      />

      <Footer />
      <RedirectionHaut />
    </div>
  );
}

export default Coach;
