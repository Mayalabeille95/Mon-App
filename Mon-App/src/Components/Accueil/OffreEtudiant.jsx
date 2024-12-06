import React from "react";

const OffreEtudiant = () => {
  return (
    <section id="offre_étudiant">
      <div className="containerimg_Accueil">
        <div className="illustration_Accueil">
          <img
            className="img_accueil"
            src="Assets/images/etudiant.png"
            width="400"
            alt="Offre étudiante"
          />
        </div>
        <div className="zone_de_texte_Accueil">
          <h2 className="h2_Accueil">Offre Étudiante Spéciale</h2>
          <p className="p_Accueil">
            Profitez de notre offre étudiante exclusive pour les jeunes de 18 à
            25 ans ! Obtenez une réduction allant jusqu'à 15€ tous les 4
            semaines sur votre abonnement.
          </p>
          <p className="p_Accueil">
            <strong className="strong_Accueil">Conditions :</strong> Présentez
            un justificatif de scolarité et bénéficiez de cette offre tout au
            long de l'année. Cette offre est valable sur tous nos forfaits, sans
            engagement.
          </p>
          <p className="p_Accueil">
            Vous pouvez également opter pour une option coaching à prix réduit
            pour compléter votre abonnement.
          </p>
          <button className="button_accueil_">
            <a className="a_Accueil" href="/Abonnement">
              Abonnements Étudiants
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OffreEtudiant;
