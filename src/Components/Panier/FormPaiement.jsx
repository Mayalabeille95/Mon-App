import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importation du hook useNavigate

const FormPaiement = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate(); // Hook pour la redirection

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
    // Redirection après soumission
    navigate("/Paiement"); // Redirige après la soumission du formulaire
  };

  return (
    <div>
      <h2 className="Info1">Informations personnelles</h2>
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

        <div className="button-abo">
          <button>
            <Link to="/Paiement">Confirmer</Link>
          </button>
        </div>
      </form>
      {isSubmitted && <p>Merci ! Vos informations ont été envoyées.</p>}
    </div>
  );
};

export default FormPaiement;
