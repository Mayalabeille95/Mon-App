import React from "react";

const CardioComponent = () => {
  return (
    <div className="containerimg">
      <div className="illustration">
        <a href="/Cardio">
          <img
            src="/Assets/images/cardio - Copie.jpg"
            width="400"
            alt="Cardio"
          />
        </a>
        <button className="coach-button">
          <a href="/Cardio">Coach cardio</a>
        </button>
      </div>
      <div className="zone-de-texte-1">
        <p>
          Le cardio, c'est bien plus que de simples séances de course sur tapis
          ou de pédalage. C'est une composante essentielle de ta forme physique
          globale, un pilier pour ta santé et ta longévité. Que tu sois un
          sportif de haut niveau ou quelqu'un qui cherche à améliorer son
          bien-être quotidien, intégrer le cardio dans ta routine d'entraînement
          te permettra d'augmenter ton endurance, de brûler des calories, de
          réduire le stress, et de maintenir une bonne santé cardiaque.
        </p>
      </div>
    </div>
  );
};

export default CardioComponent;
