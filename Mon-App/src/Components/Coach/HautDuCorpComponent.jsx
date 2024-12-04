import React from "react";

const HautDuCorpComponent = () => {
  return (
    <div className="containerimgCoach">
      <div className="illustrationCoach">
        <a href="/HautDuCorps">
          <img
            src="/Assets/images/musculhaut.jpg"
            width="400"
            alt="musculhaut"
          />
        </a>
        <button className="coach-buttonCoach">
          <a href="/HautDuCorps">Coach haut du corps</a>
        </button>
      </div>
      <div className="zone-de-texteCoach">
        <p>
          Tu rêves d'un corps puissant, d'une posture fière et d'une force qui
          dépasse tes limites ? Alors, il est temps de te concentrer sur le haut
          du corps ! Chaque rep, chaque mouvement que tu fais te rapproche un
          peu plus de la version la plus forte de toi-même. Le travail du haut
          du corps n'est pas seulement une question d'apparence. C'est un
          véritable investissement dans ta confiance, ton énergie et ta capacité
          à surmonter tous les obstacles. Que tu sois débutant ou athlète
          confirmé, chaque série, chaque exercice est une occasion de repousser
          tes limites.
        </p>
      </div>
    </div>
  );
};

export default HautDuCorpComponent;
