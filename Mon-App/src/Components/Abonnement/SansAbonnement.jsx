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

/* Le code présente un composant React appelé SansAbonnement,
 qui affiche différentes offres d'abonnement sans engagement.
  Chaque offre est détaillée avec son prix (par exemple, 22.99$ ou 42.99$ pour 4 semaines) et ses avantages,
   tels que des sacs de sport, des accès au club, 
   des cours collectifs digitaux, un suivi de progression sur une application, 
   des réductions, et la possibilité d'inviter un ami à chaque entraînement.
    Chaque option propose un bouton qui redirige l'utilisateur vers la page du panier pour effectuer un achat via un lien <Link>.
     Ce composant est exporté pour une utilisation dans d'autres parties de l'application. */
