import React from "react";

const OffreCoaching = () => {
  return (
    <section id="offre-coaching">
      <div className="containerimg1">
        <div className="illustration">
          <img
            src="images/bodybuilder.jpg"
            width="300"
            alt="Voici nos coachs"
          />
        </div>

        <div className="zone-de-texte1">
          <h2>Coaching Personnalisé</h2>
          <p>
            Besoin d'un coup de pouce? <br />
            Nos coachs spécialisé sont à votre écoute. Ils vont aideront à fixer
            et atteindre vos objectifs! <br />
            Venez vous dépasser !
          </p>
        </div>
        <button className="button-accueil1">
          <a href="coach.html">Trouve ton coach</a>
        </button>
      </div>
    </section>
  );
};

export default OffreCoaching;
