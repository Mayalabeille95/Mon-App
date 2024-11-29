import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import RedirectionExo from "../Components/VideoMateriel/RedirectionExo";
import ExerciceSection from "../Components/VideoMateriel/ExerciceSection";
import ExplicationExo from "../Components/VideoMateriel/ExplicationExo";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

function VideoMatériel() {
  return (
    <div>
      <Header />
      <ExplicationExo />
      <RedirectionExo />
      <ExerciceSection />
      <RedirectionHaut />
      <Footer />
    </div>
  );
}
export default VideoMatériel;
