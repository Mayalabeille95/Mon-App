import React from 'react';
import imagebannnière from "../../Assets/images/45877_1.jpg";

function CoursRaisons() {
  const Raisons = [
    { title: "Amélioration de la Condition Physique", description: "Participez à des cours réguliers pour développer votre endurance, votre force et votre souplesse" },
    { title: "Motivation et Engagement", description: "L'environnement de groupe vous pousse à vous dépasser et à rester engagé..." },
    { title: "Encadrement Professionnel", description: "Bénéficiez des conseils d'entraîneurs certifiés qui vous guideront..." },
    { title: "Variété et Fun", description: "Découvrez une grande variété d'activités, allant du Pilates à la danse..." },
    { title: "Bien-être Mental", description: "Améliorez votre humeur et réduisez le stress grâce à l'exercice régulier..." },
    { title: "Suivi des Progrès", description: "Suivez vos améliorations et ajustez vos objectifs au fil du temps..." },
    { title: "Création d'une Communauté", description: "Rencontrez des personnes partageant les mêmes intérêts et créez des liens durables..." }
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
        <button onClick={() => window.location.href='/src/Pages/Coach.jsx'} type="button">
          Prêt à passer à la vitesse supérieure ?<br />
          Consultez notre équipe de coachs pour un soutien professionnel !
        </button>
      </div>
      <p className="slogan">Ensemble, nous sommes plus forts ! Rejoignez nos équipes et partagez la passion du sport collectif !</p>
    </section>
    </>
    
  );
}

export default CoursRaisons;