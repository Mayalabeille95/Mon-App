import React, { useState, useEffect } from "react";

const ChristopheLechaptois = () => {
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/coachs/2") // Assurez-vous que le serveur JSON est en cours d'exécution
      .then((response) => response.json())
      .then((data) => setCoach(data))
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []);

  if (!coach) return <p>Chargement...</p>;

  return (
    <section className="Section_Hdc">
      <h1 className="h1_Hdc">Renforce ton Haut du corps avec {coach.nom}</h1>
      <img className="img_Hdc1" src={coach.image} alt={`Coach ${coach.nom}`} />
      <div className="div_Hdc1">
        <span className="span_Hdc" style={{ color: "black" }}>
          ★
        </span>
        <span className="span_Hdc" style={{ color: "black" }}>
          ★
        </span>
        <span className="span_Hdc" style={{ color: "black" }}>
          ★
        </span>
        <span className="span_Hdc" style={{ color: "black" }}>
          ★
        </span>
        <span
          className="span_Hdc"
          style={{ color: coach.rating >= 4.5 ? "black" : "gray" }}
        >
          ☆
        </span>
        <span
          className="span_Hdc1"
          style={{ marginLeft: "8px", color: "black", fontWeight: "bold" }}
        >
          {coach.rating}
        </span>
      </div>
      <div className="div_Hdc">
        <h2 className="h2_Hdc">À propos de {coach.nom}</h2>
        <p className="p_Hdc">{coach.description}</p>
      </div>
      <div className="div_Hdc">
        {coach.features.map((feature, index) => (
          <div className="div_Hdc" key={index}>
            <h3 className="h3_Hdc">{feature.title}</h3>
            <p className="p_Hdc">{feature.content}</p>
          </div>
        ))}
      </div>
      <div className="div_Hdc">
        <h2 className="h2_Hdc">Les résultats que tu peux attendre :</h2>
        <ul className="ul_Hdc">
          {coach.results.map((result, index) => (
            <li className="li_Hdc" key={index}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChristopheLechaptois;
