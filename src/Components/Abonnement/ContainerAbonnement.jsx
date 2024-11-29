import React from "react";
import AvecABonnement from "./AvecABonnement";
import SansAbonnement from "./SansAbonnement";

const ContainerAbonnement = () => {
  return (
    <section id="container-abonnement">
      <AvecABonnement />
      <SansAbonnement />
    </section>
  );
};

export default ContainerAbonnement;
