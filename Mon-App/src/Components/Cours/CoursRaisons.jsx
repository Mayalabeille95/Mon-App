import React from "react";
import imagebannnière from "../../Assets/images/45877_1.jpg";

function CoursRaisons() {
  const Raisons = [
    {
      title: "Amélioration de la Condition Physique",
      description:
        "Participez à des cours réguliers pour développer votre endurance, votre force et votre souplesse",
    },
    {
      title: "Motivation et Engagement",
      description:
        "L'environnement de groupe vous pousse à vous dépasser et à rester engagé dans votre routine d'exercice. Les encouragements mutuels créent une dynamique positive qui favorise la persévérance.",
    },
    {
      title: "Encadrement Professionnel",
      description:
        "Bénéficiez des conseils d'entraîneurs certifiés qui vous guideront dans votre pratique. Ils peuvent adapter les exercices à vos besoins spécifiques et vous aider à éviter les blessures.",
    },
    {
      title: "Variété et Fun",
      description:
        "Découvrez une grande variété d'activités, allant du Pilates à la danse, pour garder votre entraînement amusant et stimulant. Cette diversité aide à prévenir l'ennui et à maintenir votre motivation.",
    },
    {
      title: "Bien-être Mental",
      description:
        "Améliorez votre humeur et réduisez le stress grâce à l'exercice régulier. Les cours de sport favorisent la libération d'endorphines, contribuant ainsi à un sentiment général de bien-être.",
    },
    {
      title: "Suivi des Progrès",
      description:
        "Suivez vos améliorations et ajustez vos objectifs au fil du temps.De nombreux cours incluent des évaluations périodiques pour mesurer vos progrès et vous encourager à aller plus loin.",
    },
    {
      title: "Création d'une Communauté",
      description:
        "Rencontrez des personnes partageant les mêmes intérêts et créez des liens durables. La camaraderie développée dans les cours peut mener à des amitiés solides en dehors du gymnase.",
    },
  ];

  return (
    <>
      <div class="containerimg">
        <h1>Cours de Sport collectifs et Suivi</h1>
        <h2>ON VOUS ACCOMPAGNE !</h2>
        <div class="illustration"></div>
        <img src={imagebannnière} alt="" />
      </div>
      <section className="cours-raisons">
        <p className="bienfaits">LES BIENFAITS DE NOS SEANCES</p>
        <div id="container-cours">
          {Raisons.map((Raisons, index) => (
            <div key={index} className="zone-de-texte">
              <h2>{Raisons.title}</h2>
              <p>{Raisons.description}</p>
            </div>
          ))}
        </div>
        <div className="button-cours">
          <button
            onClick={() => (window.location.href = "/src/Pages/Coach.jsx")}
            type="button"
          >
            Prêt à passer à la vitesse supérieure ?<br />
            Consultez notre équipe de coachs pour un soutien professionnel !
          </button>
        </div>
        <p className="slogan">
          Ensemble, nous sommes plus forts ! Rejoignez nos équipes et partagez
          la passion du sport collectif !
        </p>
      </section>
    </>
  );
}

export default CoursRaisons;

/*
Le composant CoursRaisons présente les avantages des cours de sport collectifs.
Il affiche une bannière avec un titre et une image, suivie d'une section détaillant les bienfaits des séances.
Le composant utilise un tableau d'objets pour lister sept raisons principales, chacune avec un titre et une description
 Ces raisons sont affichées dynamiquement à l'aide de la méthode map(). 
 Le composant inclut également un bouton d'appel à l'action redirigeant vers la page des coachs, 
 ainsi qu'un slogan encourageant la participation aux sports collectifs. L'ensemble est structuré 
 pour offrir une présentation attrayante et informative des avantages des cours proposés.
*/
