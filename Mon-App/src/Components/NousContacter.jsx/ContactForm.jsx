import React, { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Veuillez entrer un message avant de soumettre.");
      return;
    }
    setIsSubmitted(true);
    // Logic for sending the form data (e.g., API call) can go here
    console.log("Formulaire soumis:", message);
  };

  return (
    <div className="div_contact">
      <h2 className="h2_contact">Formulaire de contact</h2>
      <form className="form_contact" onSubmit={handleSubmit}>
        <textarea
          className="textarea_contact"
          placeholder="Vous pouvez inscrire ici vos réclamations"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button className="button_contact" type="submit">
          Envoyer le formulaire
        </button>
      </form>
      {isSubmitted && (
        <p className="p_contact">
          Merci pour votre message ! Nous vous répondrons bientôt.
        </p>
      )}
    </div>
  );
};

export default ContactForm;

/*
Le composant ContactForm crée un formulaire de contact simple avec un champ de texte pour les messages.
Il utilise le hook useState pour gérer l'état du message et l'état de soumission du formulaire.
La fonction handleSubmit gère la soumission du formulaire, vérifiant si le message n'est pas vide avant de le traiter.
Le composant affiche un message de confirmation après la soumission réussie. Cette structure permet une
interaction utilisateur fluide pour l'envoi de messages ou de réclamations, avec une validation de base 
et un retour visuel sur l'action de l'utilisateur.
*/
