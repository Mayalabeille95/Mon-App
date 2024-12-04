import React from "react";
import AvecAbonnement from "./AvecAbonnement";
import SansAbonnement from "./SansAbonnement";

const ContainerAbonnement = () => {
  return (
    <section id="container-abonnement">
      {/* Offres avec abonnement */}
      <div className="avecAbonnement-group">
        <h2 className="h2Abonnement">Avec Abonnement</h2>
        <AvecAbonnement />
      </div>

      {/* Offres sans abonnement */}
      <div className="sansAbonnement-group">
        <h2 className="h2Abonnement sansAbonnement-title">Sans Abonnement</h2>
        <SansAbonnement />
      </div>
    </section>
  );
};

export default ContainerAbonnement;

/* Le code présente un composant React appelé ContainerAbonnement,
qui sert de conteneur pour deux autres composants : AvecABonnement et SansAbonnement. 
Il utilise une section HTML (<section>) pour afficher ces deux composants, permettant ainsi 
d'afficher différentes options d'abonnement (avec et sans engagement). Ce composant est ensuite 
exporté pour être utilisé dans d'autres parties de l'application. */
