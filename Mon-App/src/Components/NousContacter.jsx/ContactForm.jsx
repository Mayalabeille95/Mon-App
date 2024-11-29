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
    <div>
      <h2>Formulaire de contact</h2>
      <form className="form-contact" onSubmit={handleSubmit}>
        <textarea
          placeholder="Vous pouvez inscrire ici vos réclamations"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button type="submit">Envoyer le formulaire</button>
      </form>
      {isSubmitted && (
        <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
      )}
    </div>
  );
};

export default ContactForm;
