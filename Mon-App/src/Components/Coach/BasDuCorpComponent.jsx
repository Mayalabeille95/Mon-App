import React from "react";

const BasDuCorpComponent = () => {
  return (
    <div className="containerimg">
      <div className="illustration">
        <a href="/BasDuCorps">
          <img
            src="/Assets/images/basducorp.jpg"
            width="400"
            alt="musculhaut"
          />
        </a>
        <button className="coach-button">
          <a href="/BasDuCorps">Coach bas du corps</a>
        </button>
      </div>
      <div className="zone-de-texte-1">
        <p>
          Si tu veux vraiment développer ta puissance, ton endurance et ta
          solidité, il est essentiel de ne pas négliger le bas du corps. Les
          jambes et les fessiers ne sont pas seulement des muscles esthétiques :
          ce sont les piliers qui soutiennent tout le reste. Le bas du corps,
          c'est bien plus qu'une simple partie de ta silhouette. C'est la
          fondation de ton corps, la clé pour augmenter ta force générale et
          optimiser tes performances physiques. Travailler tes jambes, c'est
          t'assurer d'avoir un corps équilibré, robuste et prêt à affronter
          toutes les épreuves, dans la salle de sport comme dans la vie
          quotidienne. À toi de choisir ton coach maintenant !
        </p>
      </div>
    </div>
  );
};

export default BasDuCorpComponent;
