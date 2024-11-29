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

// Le code définit un composant React appelé `OffreCoaching`, qui présente une offre de coaching personnalisé.
// Cette section contient une image d'un bodybuilder accompagnée d'un titre (`h2`) "Coaching Personnalisé" et
// d'un paragraphe (`<p>`) expliquant que des coachs spécialisés sont disponibles pour aider les utilisateurs
// à fixer et atteindre leurs objectifs. Un bouton avec un lien (`<a>`) permet de rediriger l'utilisateur vers
// la page "coach.html" pour trouver un coach. La section est contenue dans une `div` avec la classe CSS `containerimg1`
// pour organiser l'image et le texte de manière esthétique.
