import React from "react";
import { Link } from "react-router-dom";

const AvecABonnement = () => {
  return (
    <div className="avecAbonnement">
      <h2>Avec Engagement</h2>
      <ul>
        <h3>15.00$ / 4 Semaines / Offre Etudiante</h3>
        <li>Un sac de sport</li>
        <li>Accès limité au club d'inscription</li>
        <li>Cours collectifs digital</li>
        <li>Training et suivi de ta progression sur l'application</li>
        <button className="button-abo">
          <Link to="/Panier" className="button">
            Choisir Ofrre Etudiante
          </Link>
        </button>
      </ul>

      <ul>
        <h3>19.99$ / 4 Semaines</h3>
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
        <h3>29.99$ / 4 Semaines</h3>
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
        <h3>39.99$ / 4 Semaines</h3>
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

export default AvecABonnement;

/* Le code présente un composant React appelé AvecABonnement,
qui affiche plusieurs offres d'abonnement pour un club de sport avec différents tarifs et avantages.
Chaque offre est listée avec des détails comme le prix (par exemple, 15$ ou 39.99$ pour 4 semaines) 
et des avantages associés, tels que des sacs de sport, des accès au club, des cours collectifs digitaux, 
et des suivis de progression sur une application. Un bouton permet de choisir chaque offre et de rediriger 
l'utilisateur vers la page du panier grâce à un lien <Link>. Ce composant est également exporté pour une utilisation 
dans d'autres parties de l'application.*/
