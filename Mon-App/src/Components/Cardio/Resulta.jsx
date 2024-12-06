import React from "react";

const Results = () => {
  return (
    <section>
      <h2 className="h2_Bascardio">Les Résultats Que Tu Peux Attendre :</h2>
      <ul className="ul_Bascardio">
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Endurance Cardio Améliorée :
          </strong>{" "}
          Ton corps sera capable de supporter des efforts prolongés avec moins
          de fatigue.
        </li>
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Perte de Poids et Brûlage de Graisses :
          </strong>{" "}
          En suivant un programme cardio adapté, tu vas brûler des calories
          efficacement et réduire ton taux de masse grasse.
        </li>
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Meilleure Santé Cardiovasculaire :
          </strong>{" "}
          Un cœur plus fort, une meilleure circulation sanguine, et une forme
          physique générale améliorée.
        </li>
      </ul>
    </section>
  );
};

export default Results;
