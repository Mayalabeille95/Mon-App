import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import ExplicationExo from "../Components/Matériel/ExplicationExo";
import RedirectionExo from "../Components/Matériel/RedirectionExo";
import MaterielSection from "../Components/Matériel/MaterielSection";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

function Materiel() {
  const sections = [
    {
      id: "Epaulesdos",
      imgSrc: "/Mon-App/src/Assets/images/Epaulesdos.jpg",
      title: "Epaules et Dos",
      link: "../Pages/VideoMatériel",
    },
    {
      id: "Bras",
      imgSrc: "/Mon-App/src/Assets/images/Bras.jpg",
      title: "Bras",
      link: "../Pages/VideoMatériel",
    },
    {
      id: "PecsAbdos",
      imgSrc: "/Mon-App/src/Assets/images/pecsabdos.jpg",
      title: "Pecs Abdos",
      link: "../Pages/VideoMatériel",
    },
    {
      id: "Jambes",
      imgSrc: "/Mon-App/src/Assets/images/jambes.jpg",
      title: "Jambes",
      link: "../Pages/VideoMatériel",
    },
    {
      id: "Fessiers",
      imgSrc: "/Mon-App/src/Assets/images/fessiers.jpg",
      title: "Fessiers",
      link: "../Pages/VideoMatériel",
    },
    {
      id: "Cardio",
      imgSrc: "/Mon-App/src/Assets/images/Cardio.jpg",
      title: "Cardio",
      link: "../Pages/VideoMatériel.jsx",
    },
  ];

  return (
    <div>
      <Header />
      <ExplicationExo />
      <RedirectionExo />
      <MaterielSection sections={sections} />
      <RedirectionHaut />
      <Footer />
    </div>
  );
}

export default Materiel;
