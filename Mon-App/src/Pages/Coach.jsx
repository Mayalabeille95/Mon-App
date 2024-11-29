// src/Pages/Coach.jsx
import React from "react";
import Header from "../Components/Base/Header";
import Footer from "../Components/Base/Footer";
import CoachInfo from "../Components/Coach/CoachInfo";
import CoachSection from "../Components/Coach/CoachSection";

function Coach() {
  return (
    <div>
      <Header />

      <CoachInfo />

      <br />

      <CoachSection
        image="images/hautducorp.jpg"
        altText="musculhaut"
        link="Hautducorps.html"
        title="Coach Haut du Corps"
      />

      <CoachSection
        image="images/basducorp.jpg"
        altText="musculhaut"
        link="Basducorp.html"
        title="Coach Bas du Corps"
      />

      <CoachSection
        image="images/cardio - Copie.jpg"
        altText="musculhaut"
        link="Cardio.html"
        title="Coach Cardio"
      />

      <Footer />
    </div>
  );
}

export default Coach;
