import React from "react";

const ExerciceSection = () => {
  return (
    <section className="materiel-sections" id="exercice-section">
      <div className="materiel-illustration" id="exercice-epaule-dos">
        <section id="Epaulesdos" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice d'Epaule et Dos
          </h3>
          <iframe
            src="https://www.youtube.com/embed/n4fsXXfU5jY?si=vfjoYzRXdRUXAPcf"
            width="80%"
            height="500"
            title="Exercice Epaule Dos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="materiel-illustration" id="exercice-bras">
        <section id="Bras" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice de Bras
          </h3>
          <iframe
            src="https://www.youtube.com/embed/PHTe-6kQAW0?si=scUt8Xl4Gy7OYvhE"
            width="80%"
            height="500"
            title="Exercice Bras"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="materiel-illustration" id="exercice-pecs-abdos">
        <section id="PecsAbdos" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice de Pecs et Abdos
          </h3>
          <iframe
            src="https://www.youtube.com/embed/Rn-iTuIaRNs?si=YaqDN5v8nXo7snN7"
            width="80%"
            height="500"
            title="Exercice Pecs Abdos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="materiel-illustration" id="exercice-jambes">
        <section id="Jambes" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice de Jambes
          </h3>
          <iframe
            src="https://www.youtube.com/embed/G2NWfxVM8jg?si=ytz6XESNlkDY0IJG"
            width="80%"
            height="500"
            title="Exercice Jambes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="materiel-illustration" id="exercice-fessiers">
        <section id="Fessiers" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice Fessiers
          </h3>
          <iframe
            src="https://www.youtube.com/embed/xhQinUkq8K8?si=bSBaOrWDwO6koltm"
            width="80%"
            height="500"
            title="Exercice Fessiers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      <div className="materiel-illustration" id="exercice-cardio">
        <section id="Cardio" className="materiel-multimedia">
          <h3 className="materiel-title">
            Voici un exemple d'exercice de Cardio
          </h3>
          <iframe
            src="https://www.youtube.com/embed/Kw8ddXj0_fE?si=EbgyEUK4zywXKb5z"
            width="80%"
            height="500"
            title="Exercice Cardio"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </section>
  );
};

export default ExerciceSection;

/*
Le composant ExerciceSection présente une série d'exercices via des vidéos YouTube intégrées,
chacune accompagnée d'un titre descriptif. Chaque section est dédiée à un type d'exercice spécifique,
comme les épaules et le dos, les bras, les pectoraux et abdominaux, les jambes, les fessiers et le cardio.
Les vidéos sont affichées dans des iframes avec des attributs permettant une lecture fluide et un affichage en plein écran.
Ce composant offre aux utilisateurs un accès direct à des démonstrations d'exercices, facilitant ainsi leur compréhension et leur pratique.
*/
