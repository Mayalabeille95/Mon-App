import React, { useState } from "react";

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motdepasse: "",
    confirmerMotdepasse: "",
    dateNaissance: "",
    sexe: "",
    conditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique de soumission du formulaire, comme l'appel à une API.
    console.log(formData);
  };

  return (
    <div className="fullscreen">
      <h1 className="fullscreenh1">Inscription</h1>
      <form className="form-contact" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="motdepasse">Mot de passe :</label>
          <input
            type="password"
            id="motdepasse"
            name="motdepasse"
            value={formData.motdepasse}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmer_motdepasse">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmer_motdepasse"
            name="confirmerMotdepasse"
            value={formData.confirmerMotdepasse}
            onChange={handleChange}
            required
          />
        </div>

        <div className="info-humain">
          <label htmlFor="date_naissance">Date de naissance :</label>
          <input
            type="date"
            id="date_naissance"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
          />
        </div>

        <div className="info-humain">
          <label>Sexe :</label>
          <input
            type="radio"
            id="homme"
            name="sexe"
            value="homme"
            checked={formData.sexe === "homme"}
            onChange={handleChange}
          />
          <label htmlFor="homme">Homme</label>
          <input
            type="radio"
            id="femme"
            name="sexe"
            value="femme"
            checked={formData.sexe === "femme"}
            onChange={handleChange}
          />
          <label htmlFor="femme">Femme</label>
          <input
            type="radio"
            id="autre"
            name="sexe"
            value="autre"
            checked={formData.sexe === "autre"}
            onChange={handleChange}
          />
          <label htmlFor="autre">Autre</label>
        </div>

        <div className="info-humain">
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            checked={formData.conditions}
            onChange={handleChange}
            required
          />
          <label htmlFor="conditions">J'accepte les conditions d'utilisation</label>
        </div>

        <div>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
};

export default InscriptionForm;
