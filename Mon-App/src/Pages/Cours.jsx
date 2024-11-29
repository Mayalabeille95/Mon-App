import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import CoursRaisons from "../Components/Cours/CoursRaisons";
import NosCours from "../Components/Cours/NosCours";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

function Cours() {
  return (
    <div>
      <Header />
      <CoursRaisons />
      <NosCours />
      <Footer />
      <RedirectionHaut />
    </div>
  );
}
export default Cours;
