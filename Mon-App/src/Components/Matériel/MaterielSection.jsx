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

/*
Le composant MaterielSection est conçu pour afficher une série de sections présentant
 différents types de matériel de sport. Il prend en entrée un tableau 'sections' 
 contenant les informations pour chaque type de matériel. Le composant utilise la méthode map() 
 pour générer dynamiquement des éléments pour chaque section, incluant une image, un titre et un 
 lien vers une vidéo explicative. Cette structure modulaire permet une présentation flexible et cohérente
  du matériel disponible, facilitant l'ajout ou la modification des sections à l'avenir.
*/
