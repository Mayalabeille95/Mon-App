import React, { useState } from "react";

const LocalisationForm = () => {
  const [ville, setVille] = useState("");

  const handleInputChange = (event) => {
    setVille(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Recherche pour la ville : ${ville}`);
    // Ajouter ici la logique de recherche des salles en fonction de la ville
  };

  return (
    <section id="localiser">
      <div>
        <form className="formulaire_Accueil" onSubmit={handleSubmit}>
          <h2 className="h2_Accueil">TROUVEZ VOTRE SALLE</h2>
          <input
            className="input_Accueil"
            type="search"
            list="villes"
            placeholder="Ville ou code postal"
            value={ville}
            onChange={handleInputChange}
          />
          <datalist id="villes">
            <option value="Ivry 94" />
            <option value="Paris 75" />
            <option value="Marseille 13" />
            <option value="Lyon 69" />
            <option value="Toulouse 31" />
            <option value="Nice 06" />
            <option value="Nantes 44" />
            <option value="Strasbourg 67" />
            <option value="Montpellier 34" />
            <option value="Bordeaux 33" />
            <option value="Lille 59" />
          </datalist>
          <button
            className="button_accueil"
            type="button"
            onClick={() => (window.location.href = "/Home2")}
          >
            Rechercher
          </button>
          <p className="p_Accueil">
            Trouvez la salle la plus proche de chez vous en un seul clic.
          </p>
        </form>
      </div>
    </section>
  );
};

export default LocalisationForm;
