import React from "react";

const ChristopheLechaptois = () => {
  return (
    <section className="coach-section">
      <h1 className="coach-title">
        Renforce ton bas du corps avec Christophe LECHAPTOIS
      </h1>
      <img
        src="/Assets/images/lechaptois.jpg"
        alt="Coach Christophe Lechaptois"
      />
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
        <h2>À propos de Christophe LECHAPTOIS</h2>
        <p>
          Spécialiste du bas du corps, mes programmes ciblent la musculation des
          jambes et des fessiers, tout en améliorant ta posture et ta stabilité.
        </p>
      </div>

      <div className="features-container">
        <div className="feature-box">
          <h3>Entraînement sur-mesure</h3>
          <p>
            Programmes personnalisés pour des jambes musclées et des fessiers
            sculptés.
          </p>
        </div>
        <div className="feature-box">
          <h3>Approche scientifique</h3>
          <p>
            Utilisation de techniques avancées pour renforcer la chaîne
            postérieure et optimiser ta posture.
          </p>
        </div>
        <div className="feature-box">
          <h3>Accompagnement continu</h3>
          <p>
            Un soutien constant pour garder ta motivation et atteindre tes
            objectifs plus rapidement.
          </p>
        </div>
      </div>

      <div className="results">
        <h2>Les résultats que tu peux attendre :</h2>
        <ul>
          <li>
            Des jambes plus musclées et toniques : Renforce tes quadriceps et
            mollets.
          </li>
          <li>
            Des fessiers fermes et sculptés : Travail ciblé pour des résultats
            visibles.
          </li>
          <li>
            Une meilleure posture et stabilité : Renforce la chaîne postérieure
            pour plus d’équilibre.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChristopheLechaptois;
