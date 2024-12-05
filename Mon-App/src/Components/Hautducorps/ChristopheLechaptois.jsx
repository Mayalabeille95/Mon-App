import React, { useState, useEffect } from "react";

const ChristopheLechaptois = () => {
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/coachs/1") // Assurez-vous que le serveur JSON est en cours d'exécution
      .then((response) => response.json())
      .then((data) => setCoach(data))
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []);

  if (!coach) return <p>Chargement...</p>;

  return (
    <section className="coach-section1">
      <h1 className="coach-title1">
        Renforce ton Haut du corps avec {coach.nom}
      </h1>
      <img src={coach.image} alt={`Coach ${coach.nom}`} />
      <div className="rating1">
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: "gold" }}>★</span>
        <span style={{ color: coach.rating >= 4.5 ? "gold" : "gray" }}>☆</span>
        <span
          className="rating-score1"
          style={{ marginLeft: "8px", color: "gold", fontWeight: "bold" }}
        >
          {coach.rating}
        </span>
      </div>
      <div className="coach-details1">
        <h2>À propos de {coach.nom}</h2>
        <p>{coach.description}</p>
      </div>
      <div className="features-container1">
        {coach.features.map((feature, index) => (
          <div className="feature-box1" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
      <div className="results1">
        <h2>Les résultats que tu peux attendre :</h2>
        <ul>
          {coach.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChristopheLechaptois;
