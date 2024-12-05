// src/Components/Coach/CoachSection.jsx
import React from "react";

function CoachSection({ image, altText, link, title }) {
  return (
    <div className="coach-containerimg">
      <div className="coach-illustration">
        <a href={link}>
          <img src={image} width="400" alt={altText} />
        </a>
        <button className="coach-button">
          <a href={link}>{title}</a>
        </button>
      </div>

      <div className="coach-zone-de-texte">
        <p className="p_Coach">
          Si tu veux vraiment développer ta puissance, ton endurance et ta
          solidité, il est essentiel de ne pas négliger cette partie du corps.
          Le travail de {title} est essentiel pour avoir un corps équilibré,
          robuste et prêt à affronter toutes les épreuves, dans la salle de
          sport comme dans la vie quotidienne. À toi de choisir ton coach
          maintenant !
        </p>
      </div>
    </div>
  );
}

export default CoachSection;
