import React from "react";

const InfoSection = () => {
  return (
    <section id="horaire">
      <div className="containerimg_Accueil">
        <div className="illustration_Accueil">
          <img
            className="img_accueil"
            src="Assets/images/salle.png"
            width="400"
            alt="Image de notre salle de sport"
          />
        </div>
        <div className="zone_de_texte_Accueil">
          <h2 className="h2_Accueil">
            GYM Attack - Votre salle de sport à Ivry-sur-Seine
          </h2>
          <p className="p_Accueil">
            Venez découvrir notre salle moderne, équipée des dernières machines
            de fitness et profitez de nos nombreux espaces pour vous entraîner
            en toute sérénité.
          </p>
          <p className="p_Accueil">
            <strong className="strong_Accueil">Horaires :</strong>
            Du lundi au dimanche, de 6h à 23h. Nous avons des créneaux adaptés à
            tous vos besoins, que vous soyez matinaux ou que vous préfériez vous
            entraîner le soir.
          </p>
          <p className="p_Accueil">
            Nous offrons également des services comme des vestiaires privés, un
            espace relaxation, ainsi qu'une cafétéria où vous pouvez profiter de
            boissons saines.
          </p>
          <button className="button_accueil">
            <a href="/Contact">Plus d'informations</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
