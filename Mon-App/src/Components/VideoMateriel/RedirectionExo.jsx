import React from "react";

const RedirectionExo = () => {
  return (
    <nav className="redirection-container" id="redirection-exo">
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
Le composant RedirectionExo fournit une navigation simple et intuitive vers différentes sections d'exercices sur la page.
Il contient une liste d'éléments de navigation, chacun étant un lien qui permet aux utilisateurs de se déplacer 
rapidement vers des exercices spécifiques tels que les épaules et le dos, les bras, les pectoraux et abdominaux, les jambes, 
les fessiers et le cardio. Cette fonctionnalité améliore l'expérience utilisateur en facilitant l'accès direct aux contenus d'intérêt, 
tout en maintenant une structure claire et organisée. Ce composant est essentiel pour une navigation fluide au sein de la section des exercices.
*/
