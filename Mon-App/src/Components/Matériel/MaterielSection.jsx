import React from "react";

const MaterielSection = ({ sections }) => {
  return (
    <div className="materiel-sections">
      {sections.map((section, index) => (
        <div id={section.id} className="materiel-illustration" key={index}>
          <div className="materiel-multimedia">
            <img
              src={section.imgSrc}
              width="600"
              alt={section.title}
              className="materiel-image"
            />
            <h2 className="materiel-title">{section.title}</h2>
            <a href={section.link} className="materiel-link">
              Vidéo Explicative
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterielSection;
