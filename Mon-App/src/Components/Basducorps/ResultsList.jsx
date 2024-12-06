import React from "react";

const ResultsList = () => {
  return (
    <section>
      <h2 className="h2_Bascardio">Les Résultats Que Tu Peux Attendre :</h2>
      <ul className="ul_Bascardio">
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Des jambes plus musclées et plus toniques :
          </strong>{" "}
          Renforce tes quadriceps, ischio-jambiers et mollets pour des jambes
          puissantes et bien dessinées.
        </li>
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Des fessiers fermes et sculptés :
          </strong>{" "}
          Travail ciblé pour développer des fessiers plus hauts, plus ronds et
          plus toniques.
        </li>
        <li className="li_Bascardio1">
          <strong className="strong_Bascardio">
            Une meilleure posture et stabilité :
          </strong>{" "}
          Renforce la chaîne postérieure (dos, fessiers, jambes) pour une
          posture plus droite et plus équilibrée.
        </li>
      </ul>
    </section>
  );
};

export default ResultsList;
