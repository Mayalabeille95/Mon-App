import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src="images/hautducorp.jpg"
        alt="Entraînement haut du corps"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Sculpte ton Haut du Corps, Atteins la Puissance !</h1>
        <p>
          Prêt à transformer ton corps ? Nos programmes personnalisés pour le
          haut du corps sont conçus pour maximiser ta force, sculpter tes
          muscles et repousser tes limites. Rejoins-nous dès aujourd'hui pour un
          entraînement sur-mesure !
        </p>
        <a href="/Inscription" className="btn-primary">
          S'inscrire Maintenant
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
