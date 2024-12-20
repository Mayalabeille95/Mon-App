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
    <div className="_rassemblement">
      <div className="sans_Abonnement">
        <h2 className="h2_Abonnement">Sans Engagement</h2>
        {abonnements
          .filter((abonnement) => abonnement.type === "Sans Engagement")
          .map((abonnement, index) =>
            abonnement.offres.map((offre, idx) => (
              <div key={`${index}-${idx}`} className="offre-container">
                <ul className="ul_Abonnement">
                  <h3 className="h3_Abonnement">{offre.nom}</h3>
                  <li className="li_Abonnement_prix">{offre.prix}</li>
                  <li className="li_Abonnement">{offre.sac}</li>
                  <li className="li_Abonnement">{offre.acces}</li>
                  <li className="li_Abonnement">{offre.cours}</li>
                  <li className="li_Abonnement">{offre.suivi}</li>
                  {offre.flex && (
                    <li className="li_Abonnement">{offre.flex}</li>
                  )}
                  {offre.reduction && (
                    <li className="li_Abonnement">{offre.reduction}</li>
                  )}
                  {offre.invitation && (
                    <li className="li_Abonnement">{offre.invitation}</li>
                  )}
                  <button className="button_abo">
                    <Link to="/Panier" className="1_button">
                      {offre.nom}
                    </Link>
                  </button>
                </ul>
                {/* Ajout d'une ligne de séparation entre chaque offre */}
                <hr className="separator" />
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default SansAbonnement;
