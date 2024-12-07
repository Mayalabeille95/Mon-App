import React from "react";

const OffreCoaching = () => {
  return (
    <section id="offre_coaching">
      <div className="containerimg_Accueil">
        <div className="illustration_Accueil">
          <img
            className="img_accueil"
            src="Assets/images/coaching-perso.png"
            width="400"
            alt="Coaching personnalisé"
          />
        </div>
        <div className="zone_de_texte_Accueil">
          <h2 className="h2_Accueil">Coaching Personnalisé</h2>
          <p className="p_Accueil">
            Vous avez un objectif spécifique en tête ? Nos coachs experts sont
            là pour vous aider à l'atteindre avec des programmes sur-mesure. Que
            ce soit pour perdre du poids, prendre de la masse musculaire, ou
            améliorer votre condition physique, nous avons la solution.
          </p>
          <p className="p_Accueil">
            Nos coachs sont certifiés et suivent des formations continues pour
            vous garantir un suivi de qualité. Vous bénéficiez d'un programme
            qui évolue en fonction de vos progrès.
          </p>
          <blockquote>
            "Grâce à mon coach, j'ai atteint mes objectifs plus rapidement que
            prévu ! Le suivi est impeccable et motivant." –{" "}
            <em>Jean, membre depuis 2023</em>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default OffreCoaching;
