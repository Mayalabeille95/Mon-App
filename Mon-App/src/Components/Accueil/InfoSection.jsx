import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoSection = () => {
  const images = [
    "/Assets/images/SalleIA1.png",
    "/Assets/images/SalleIA2.png",
    "/Assets/images/SalleIA3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section id="horaire">
      <div className="containerimg_Accueil">
        <div className="illustration_Accueil">
          {/* Carrousel d'images */}
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img
                  className="img_accueil"
                  src={src}
                  width="400"
                  alt={` ${index + 1} notre salle de sport`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="zone_de_texte_Accueil">
          <h2 className="h2_Accueil">GYM Attack - Votre salle de sport</h2>
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
          <button className="button_accueil_">
            <a className="a_Accueil" href="/Contact">
              Plus d'informations
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
