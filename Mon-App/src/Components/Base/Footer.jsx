import React from "react";
import NavFooter from "./NavFooter";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Mon Site Web. Tous droits réservés.</p>
      <NavFooter />
      <SocialMedia />
    </footer>
  );
};

export default Footer;

/*
Le composant Footer représente le pied de page du site web.
Il affiche un message de copyright, intègre un composant NavFooter 
pour la navigation en bas de page, et inclut un composant SocialMedia 
pour les liens vers les réseaux sociaux. Cette structure modulaire permet 
une organisation claire et une maintenance facile du pied de page.
*/
