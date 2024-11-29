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

// Le code définit un composant React appelé `OffreEtudiant`, qui présente une offre spéciale pour les étudiants.
// Cette section contient une image liée à l'offre étudiante, un titre (`h2`) "Offre étudiante", et un paragraphe
// détaillant les conditions de l'offre : une réduction allant jusqu'à 15.00$ pour 4 semaines pour les étudiants
// âgés de 18 à 25 ans, sous présentation d'un justificatif. Un bouton avec un lien (`<a>`) redirige l'utilisateur
// vers la page "Abonnement.html" pour choisir son abonnement. La section est structurée dans une `div` avec
// la classe CSS `containerimg1` pour gérer l'agencement de l'image et du texte.
