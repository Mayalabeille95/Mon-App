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
      imgSrc: "/Assets/images/EpauleDosIA.png",
      title: "Epaules et Dos",
      link: "/VideoMatériel",
    },
    {
      id: "Bras",
      imgSrc: "/Assets/images/Bras.jpg",
      title: "Bras",
      link: "/VideoMatériel",
    },
    {
      id: "PecsAbdos",
      imgSrc: "/Assets/images/pecsabdos.jpg",
      title: "Pecs Abdos",
      link: "/VideoMatériel",
    },
    {
      id: "Jambes",
      imgSrc: "/Assets/images/jambes.jpg",
      title: "Jambes",
      link: "/VideoMatériel",
    },
    {
      id: "Fessiers",
      imgSrc: "/Assets/images/fessiers.jpg",
      title: "Fessiers",
      link: "/VideoMatériel",
    },
    {
      id: "Cardio",
      imgSrc: "/Assets/images/Cardio.jpg",
      title: "Cardio",
      link: "/VideoMatériel",
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
