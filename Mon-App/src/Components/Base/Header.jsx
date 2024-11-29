import React from "react";
import gymlogo from "../../Assets/images/gym-logo.png";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <header>
      <a className="logo" href="/Home">
        <img className="logo" src={gymlogo} alt="logo de salle de sport" />
      </a>
      <NavHeader />
    </header>
  );
};

export default Header;

/*
Le composant Header représente l'en-tête du site web. 
Il contient un logo cliquable de la salle de sport, 
qui redirige vers la page d'accueil, et intègre un composant
 NavHeader pour la navigation principale. Cette structure permet
  une présentation cohérente et professionnelle de l'en-tête sur 
  toutes les pages du site, tout en facilitant la maintenance et les mises à jour.
*/
