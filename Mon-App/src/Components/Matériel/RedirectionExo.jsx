import React from "react";

const RedirectionExo = () => {
  return (
    <nav className="redirection-container">
      <ul className="redirection-list">
        <li className="redirection-item">
          <a href="#Epaulesdos" className="redirection-link">
            Epaule Dos
          </a>
        </li>
        <li className="redirection-item">
          <a href="#Bras" className="redirection-link">
            Bras
          </a>
        </li>
        <li className="redirection-item">
          <a href="#PecsAbdos" className="redirection-link">
            Pecs Abdos
          </a>
        </li>
        <li className="redirection-item">
          <a href="#Jambes" className="redirection-link">
            Jambes
          </a>
        </li>
        <li className="redirection-item">
          <a href="#Fessiers" className="redirection-link">
            Fessiers
          </a>
        </li>
        <li className="redirection-item">
          <a href="#Cardio" className="redirection-link">
            Cardio
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default RedirectionExo;

/*
Le composant RedirectionExo crée une barre de navigation pour différentes catégories
d'exercices dans une salle de sport. Il utilise une liste non ordonnée pour afficher 
des liens vers diverses sections d'exercices, telles que "Epaule Dos", "Bras", "Pecs Abdos", "Jambes", "Fessiers", et "Cardio". 
Chaque lien est stylisé avec des classes CSS spécifiques pour une présentation cohérente. 
Ce composant facilite la navigation rapide vers différentes parties de la page ou du site, 
améliorant ainsi l'expérience utilisateur en permettant un accès facile aux informations sur les exercices spécifiques.
*/
