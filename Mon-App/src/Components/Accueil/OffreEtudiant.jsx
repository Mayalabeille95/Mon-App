import React from "react";

const OffreEtudiant = () => {
  return (
    <section id="offre-étudiant">
      <div className="containerimg1">
        <div className="illustration">
          <img
            src="images/offre-étudiante.jpg"
            width="300"
            alt="Voici l'offre étudiante"
          />
        </div>
        <div className="zone-de-texte1">
          <h2>Offre étudiante</h2>
          <p>
            Profitez d'une offre avantageuse pour les étudiants 18 - 25 ans.
            <br />
            Choisi ta formule et bénéficie d'une réduction allant jusqu'à 15.00$
            / 4 semaines
            <br />
            Sous présence d'un justificatif
          </p>
        </div>
        <button className="button-accueil1">
          <a href="Abonnement.html" className="button">
            Abonnements
          </a>
        </button>
      </div>
    </section>
  );
};

export default OffreEtudiant;
