import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SansAbonnement = () => {
  const [abonnements, setAbonnements] = useState([]);

  useEffect(() => {
    // Récupérer les données depuis le fichier JSON
    fetch("http://localhost:3000/abonnements")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => setAbonnements(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div className="sansAbonnement">
      <h2 className="h2Abonnement">Sans Engagement</h2>
      {abonnements
        .filter((abonnement) => abonnement.type === "Sans Engagement")
        .map((abonnement, index) =>
          abonnement.offres.map((offre, idx) => (
            <ul className="ulAbonnement" key={`${index}-${idx}`}>
              <h3 className="h3Abonnement">{offre.nom}</h3>
              <li className="liAbonnement">{offre.prix}</li>
              <li className="liAbonnement">{offre.sac}</li>
              <li className="liAbonnement">{offre.acces}</li>
              <li className="liAbonnement">{offre.cours}</li>
              <li className="liAbonnement">{offre.suivi}</li>
              {offre.flex && <li className="liAbonnement">{offre.flex}</li>}
              {offre.reduction && (
                <li className="liAbonnement">{offre.reduction}</li>
              )}
              {offre.invitation && (
                <li className="liAbonnement">{offre.invitation}</li>
              )}
              <button className="button-abo">
                <Link to="/Panier" className="button">
                  {offre.nom}
                </Link>
              </button>
            </ul>
          ))
        )}
    </div>
  );
};

export default SansAbonnement;
