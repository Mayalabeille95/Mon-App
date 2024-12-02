import React from "react";

const ClementLebrie = () => {
  return (
    <section className="coach-section">
      <h1 className="coach-title">
        Transforme ton haut du corps avec Clement LEBRIE
      </h1>
      <img src="/Assets/images/hautducorp.jpg" alt="Coach Clement Lebrie" />
      <div className="rating">
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gray" }}>☆</span>
        <span
          className="rating-score"
          style={{ marginLeft: "8px", color: "gold", fontWeight: "bold" }}
        >
          4.6
        </span>
      </div>
      <div className="coach-details">
        <h2>À propos de Clement LEBRIE</h2>
        <p>
          Tu rêves de développer un haut du corps musclé, sculpté et puissant ?
          Mon programme de coaching est conçu pour t'aider à atteindre tes
          objectifs. Chaque programme est 100% personnalisé et adapté à ton
          niveau, tes besoins et ton emploi du temps.
        </p>
      </div>

      <div className="features-container">
        <div className="feature-box">
          <h3>Entraînement sur-mesure</h3>
          <p>
            Que tu sois débutant ou athlète confirmé, je crée un programme
            spécifique pour toi, basé sur tes objectifs personnels et ton niveau
            actuel.
          </p>
        </div>
        <div className="feature-box">
          <h3>Méthodologie scientifique</h3>
          <p>
            Approche basée sur des méthodes éprouvées combinant force,
            hypertrophie et travail fonctionnel.
          </p>
        </div>
        <div className="feature-box">
          <h3>Suivi et ajustement continus</h3>
          <p>
            Avec un suivi personnalisé, je m'assure que tu progresses tout en
            minimisant les risques de blessure.
          </p>
        </div>
      </div>

      <div className="results">
        <h2>Les résultats que tu peux attendre :</h2>
        <ul>
          <li>
            Un haut du corps plus fort : Augmente ta puissance et définis tes
            muscles.
          </li>
          <li>
            Une posture améliorée : Renforce ton dos, tes épaules et ta ceinture
            abdominale.
          </li>
          <li>
            Plus de confiance en toi : Le développement musculaire booste
            également ton mental.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClementLebrie;
