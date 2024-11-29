import React from "react";

const LocalisationForm = () => {
  return (
    <section id="localiser">
      <div>
        <form className="formulaire">
          <h2>TROUVEZ VOTRE SALLE</h2>
          <input
            type="search"
            list="villes"
            placeholder="Ville ou code postal"
          />

          <datalist id="villes">
            <option value="Ivry 94"></option>
            <option value="Paris 75"></option>
            <option value="Marseille 13"></option>
            <option value="Lyon 69"></option>
            <option value="Toulouse 31"></option>
            <option value="Nice 06"></option>
            <option value="Nantes 44"></option>
            <option value="Strasbourg 67"></option>
            <option value="Montpellier 34"></option>
            <option value="Bordeaux 33"></option>
            <option value="Lille 59"></option>
          </datalist>

          <button className="button-accueil1" type="submit">
            CLIQUER ICI
          </button>
          <p className="paragraphe-accueil">
            Accédez à la salle la plus proche de chez vous en un clique
          </p>
        </form>
      </div>
    </section>
  );
};

export default LocalisationForm;
