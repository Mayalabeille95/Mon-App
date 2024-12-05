import React from "react";
import AvecABonnement from "./AvecABonnement";
import SansAbonnement from "./SansAbonnement";

const ContainerAbonnement = () => {
  return (
    <div className="container_abonnement">
      <AvecABonnement />
      <SansAbonnement />
    </div>
  );
};

export default ContainerAbonnement;

/* Le code présente un composant React appelé ContainerAbonnement,
qui sert de conteneur pour deux autres composants : AvecABonnement et SansAbonnement. 
Il utilise une section HTML (<section>) pour afficher ces deux composants, permettant ainsi 
d'afficher différentes options d'abonnement (avec et sans engagement). Ce composant est ensuite 
exporté pour être utilisé dans d'autres parties de l'application. */
