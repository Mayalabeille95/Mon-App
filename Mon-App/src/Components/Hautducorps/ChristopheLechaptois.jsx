import React from "react";

const ChristopheLechaptois = () => {
  return (
    <section className="coach-section1">
      <h1 className="coach-title1">
        Renforce ton Haut du corps avec Christophe LECHAPTOIS
      </h1>
      <img
        src="/Assets/images/lechaptois.jpg"
        alt="Coach Christophe Lechaptois"
      />
      <div className="rating1">
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gray" }}>☆</span>
        <span
          className="rating-score1"
          style={{ marginLeft: "8px", color: "gold", fontWeight: "bold" }}
        >
          4.6
        </span>
      </div>
      <div className="coach-details1">
        <h2>À propos de Christophe LECHAPTOIS</h2>
        <p>
          Spécialiste du Haut du corps, mes programmes sont conçus pour
          renforcer les muscles du tronc, des bras et des épaules, tout en
          optimisant ta posture et ta stabilité.
        </p>
      </div>

      <div className="features-container1">
        <div className="feature-box1">
          <h3>Entraînement sur-mesure</h3>
          <p>
            Que tu sois débutant ou athlète confirmé, je crée un programme
            spécifique pour toi, basé sur tes objectifs personnels et ton niveau
            actuel. Plus qu’un simple programme générique, chaque séance est
            ajustée pour maximiser tes résultats et répondre à tes besoins
            spécifiques.
          </p>
        </div>
        <div className="feature-box1">
          <h3>Approche scientifique</h3>
          <p>
            Mon approche est fondée sur des méthodes d'entraînement éprouvées,
            combinant force, hypertrophie et travail fonctionnel. Chaque séance
            est pensée pour développer les muscles des jambes et des fessiers,
            améliorer ta posture et renforcer ton corps dans son ensemble.
          </p>
        </div>
        <div className="feature-box1">
          <h3>Accompagnement continu</h3>
          <p>
            L’entraînement n’est pas un événement ponctuel, mais un processus
            continu. Avec mon suivi personnalisé, je m’assure que tu progresses
            et que ton programme est ajusté au fur et à mesure de ton évolution,
            tout en minimisant les risques de blessure.
          </p>
        </div>
      </div>

      <div className="results1">
        <h2>Les résultats que tu peux attendre :</h2>
        <ul>
          <li>
            Des bras forts et sculptés : Renforce tes biceps, triceps et
            avant-bras pour des bras plus toniques et définis.
          </li>
          <li>
            Des épaules sculptées et larges : Développe tes deltoïdes pour
            obtenir des épaules plus volumineuses et mieux dessinées.
          </li>
          <li>
            Un tronc solide et bien défini : Renforce tes abdominaux et ton dos
            pour une silhouette plus équilibrée et une posture optimale.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChristopheLechaptois;
