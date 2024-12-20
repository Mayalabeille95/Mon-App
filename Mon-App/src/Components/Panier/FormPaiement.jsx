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
    <div className="divPanier1">
      <h2 className="h2Panier">Informations personnelles</h2>
      <form className="info-panier" onSubmit={handleSubmit}>
        <label className="labelPanier" htmlFor="nom">
          Nom :
        </label>
        <input
          className="inputPanier"
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label className="labelPanier" htmlFor="prenom">
          Prénom :
        </label>
        <input
          className="inputPanier"
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label className="labelPanier" htmlFor="email">
          Email :
        </label>
        <input
          className="inputPanier"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label className="labelPanier" htmlFor="telephone">
          Téléphone :
        </label>
        <input
          className="inputPanier"
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
        <br />
        <br />

        <div className="button-Abo">
          <button className="button-Panier">
            <Link to="/Paiement">Confirmer</Link>
          </button>
        </div>
      </form>
      {isSubmitted && <p>Merci ! Vos informations ont été envoyées.</p>}
    </div>
  );
};

export default FormPaiement;

/*
Le composant FormPaiement permet aux utilisateurs de saisir leurs informations
personnelles nécessaires pour le processus de paiement. Il utilise le hook useState
pour gérer les données du formulaire et le hook useNavigate pour rediriger l'utilisateur
après la soumission. Le formulaire inclut des champs pour le nom, le prénom, l'email et 
le téléphone, avec des validations pour s'assurer que les champs obligatoires sont remplis. 
Une fois le formulaire soumis avec succès, un message de remerciement s'affiche et l'utilisateur 
est redirigé vers la page de paiement, offrant ainsi une expérience utilisateur fluide et intuitive.
*/
