import React from 'react';

function NosCours() {
  const cours = [
    {
      title: "Cours de Body Pump",
      description: "Renforcez votre corps avec des barres et des poids dans un cours dynamique...",
      videoSrc: "https://www.youtube.com/embed/DaP515NflSU?si=2KaA17FKvcm8yteP"
    },
    {
      title: "Body Combat",
      description: "Un cours inspiré des arts martiaux qui combine des mouvements de boxe...",
      videoSrc: "https://www.youtube.com/embed/UyyJy9m82po?si=d2r4rPK0U2mvqXmw"
    },
    {
      title: "HIIT (High-Intensity Interval Training)",
      description: "Dépassez vos limites avec des exercices explosifs en alternance avec des périodes de repos...",
      videoSrc: "https://www.youtube.com/embed/M0uO8X3_tEA?si=leBJ_Adbk13pHXmX"
    },
    {
      title: "Pilates en groupe",
      description: "Un cours de renforcement musculaire doux qui se concentre sur le contrôle du corps...",
      videoSrc: "https://www.youtube.com/embed/eg5fhw4VNPw?si=SQmrOMoV2ihDyEj7"
    }
  ];

  return (
    <section className="noscours">
      {cours.map((cours, index) => (
        <div key={index}>
          <h2>{cours.title}</h2>
          <p>{cours.description}</p>
          <iframe className="vidéos-cours" src={cours.videoSrc} frameBorder="0" title={cours.title}></iframe><br /><br />
        </div>
      ))}
    </section>
  );
}

export default NosCours;