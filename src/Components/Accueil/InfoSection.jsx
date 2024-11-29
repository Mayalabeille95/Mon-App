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
