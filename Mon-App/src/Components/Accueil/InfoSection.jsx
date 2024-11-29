import React from "react";

const InfoSection = () => {
  return (
    <section id="horaire">
      <div className="containerimg1">
        <div className="illustration">
          <img
            src="images/salle-de-sport.jpg"
            width="300"
            alt="Image d'Accueil"
          />
        </div>

        <div className="zone-de-texte1">
          <h2>GYM Attack vous accueile dans votre salle d'Ivry sur Seine</h2>
          <p>
            Ouverte du lundi au dimanche <br />
            De 6h à 23H
          </p>
        </div>
        <button className="button-accueil1">
          <a href="NousContacter.html">Plus d'informations</a>
        </button>
      </div>
    </section>
  );
};

export default InfoSection;

// Le code définit un composant React appelé `InfoSection`, qui rend une section d'information
// concernant la salle de sport. Cette section contient une image de la salle de sport, un titre (`h2`)
// annonçant l'accueil de "GYM Attack" à Ivry sur Seine, ainsi qu'un paragraphe (`<p>`) précisant les horaires
// d'ouverture de la salle (de 6h à 23h, tous les jours). Un bouton avec un lien (`<a>`) dirige l'utilisateur
// vers une page de contact pour plus d'informations. La structure est contenue dans une `div` avec la classe
// CSS `containerimg1` pour gérer l'agencement de l'image et du texte.
