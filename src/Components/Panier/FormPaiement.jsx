import React, { useState } from "react";

const FormPaiement = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.prenom || !formData.email) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setIsSubmitted(true);
    console.log("Données du formulaire:", formData);
    // Envoyer les données du formulaire à un serveur ou une API ici
  };

  return (
    <div>
      <h2>Informations personnelles</h2>
      <form className="info-panier" onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
        <br />
        <br />

        <h2>Mode de paiement</h2>
        <div className="paiement">
          <button
            type="button"
            onClick={() => alert("Payer par Carte Bancaire")}
          >
            Carte Bancaire
          </button>
          <br />
          <br />
          <button
            type="button"
            onClick={() => alert("Payer par Prélèvement Automatique")}
          >
            Prélèvement Automatique
          </button>
          <br />
          <br />

          <button className="button-confirmer" type="submit">
            Confirmer
          </button>
        </div>
      </form>
      {isSubmitted && <p>Merci ! Vos informations ont été envoyées.</p>}
    </div>
  );
};

export default FormPaiement;
