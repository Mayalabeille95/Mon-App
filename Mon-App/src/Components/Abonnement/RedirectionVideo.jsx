import React from "react";

const RedirectionVideo = () => {
  return (
    <section id="redirection_vidéo">
      <h2 className="h2_Abonnement">Derniers articles de notre blog</h2>
      <ul className="ul_Abonnement">
        <li className="li_Abonnement">
          <a
            className="a_Abonnement"
            href="https://www.youtube.com/embed/p8FuqptA-z0?si=93oYTdDTqaq4P4BL"
          >
            5 exercices pour renforcer vos abdominaux
          </a>
        </li>
        <li className="li_Abonnement">
          <a
            className="a_Abonnement"
            href="https://www.youtube.com/embed/sAi48Pc9skM?si=Vb67-CzDLdmtIA4k"
          >
            Comment optimiser votre récupération après l'entraînement
          </a>
        </li>
        <li className="li_Abonnement">
          <a
            className="a_Abonnement"
            href="https://www.nu3.fr/blogs/fitness/prise-de-masse-alimentation-aliments"
          >
            Nutrition : les meilleurs aliments pour la prise de masse
          </a>
        </li>
      </ul>
    </section>
  );
};

export default RedirectionVideo;

/* Le code présente un composant React appelé RedirectionVideo, 
qui affiche une section contenant une liste d'articles récents du blog. 
Chaque article est présenté sous forme de lien <a>, 
redirigeant vers des vidéos YouTube ou une page web externe. 
Les titres des articles incluent "5 exercices pour renforcer vos abdominaux",
 "Comment optimiser votre récupération après l'entraînement", et "Nutrition : les meilleurs aliments pour la prise de masse". 
 Ce composant est exporté pour être utilisé dans d'autres parties de l'application. */
