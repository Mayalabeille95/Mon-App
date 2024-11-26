import React from "react";
import { Link } from "react-router-dom";

const SansAbonnement = () => {
  return (
    <div className="sansAbonnement">
      <h2>Sans Engagement</h2>
      <ul>
        <h3>22.99$ / 4 Semaines</h3>
        <li>Un sac de sport</li>
        <li>Accès limité au club d'inscription</li>
        <li>Cours collectifs digital</li>
        <li>Training et suivi de ta progression sur l'application</li>
        <button className="button-abo">
          <Link to="/Panier" className="button">
            Choisir Basic
          </Link>
        </button>
      </ul>

      <ul>
        <h3>32.99$ / 4 Semaines</h3>
        <li>Un sac de sport</li>
        <li>Accès limité au club d'inscription</li>
        <li>Cours collectifs digital</li>
        <li>Training et suivi de ta progression sur l'application</li>
        <li>Abonnement Flex sans engagement ni frais supplémentaires !</li>
        <button className="button-abo">
          <Link to="/Panier" className="button">
            Choisir Standard
          </Link>
        </button>
      </ul>

      <ul>
        <h3>42.99$ / 4 Semaines</h3>
        <li>Un sac de sport</li>
        <li>Accès limité au club d'inscription</li>
        <li>Cours collectifs digital</li>
        <li>Training et suivi de ta progression sur l'application</li>
        <li>Abonnement Flex sans engagement ni frais supplémentaires !</li>
        <li>20% de réduction sur les boissons Sportswater</li>
        <li>Possibilité d'inviter un ami à chaque entraînement</li>
        <button className="button-abo">
          <Link to="/Panier" className="button">
            Choisir Premium
          </Link>
        </button>
      </ul>
    </div>
  );
};

export default SansAbonnement;
