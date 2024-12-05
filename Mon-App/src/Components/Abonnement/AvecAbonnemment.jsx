import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvecAbonnement = () => {
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
      <div className="avec_Abonnement">
        <h2 className="h2_Abonnement">Avec Engagement</h2>
        {abonnements
          .filter((abonnement) => abonnement.type === "Avec Engagement")
          .map((abonnement, index) =>
            abonnement.offres.map((offre, idx) => (
              <ul className="ul_Abonnement" key={`${index}-${idx}`}>
                <h3 className="h3_Abonnement">{offre.nom}</h3>
                <li className="li_Abonnement">{offre.prix}</li>
                <li className="li_Abonnement">{offre.sac}</li>
                <li className="li_Abonnement">{offre.acces}</li>
                <li className="li_Abonnement">{offre.cours}</li>
                <li className="li_Abonnement">{offre.suivi}</li>
                {offre.flex && <li className="li_Abonnement">{offre.flex}</li>}
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
            ))
          )}
      </div>
    </div>
  );
};

export default AvecAbonnement;
