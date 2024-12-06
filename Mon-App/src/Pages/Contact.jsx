import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import ContactForm from "../Components/NousContacter.jsx/ContactForm";
import ContactInfo from "../Components/NousContacter.jsx/ContactInfo";
import OpeningHours from "../Components/NousContacter.jsx/OpeningHours";

// Importation de l'image
import ContactBanner from "../../src/Assets/images/salle.png";

function Contact() {
  return (
    <div style={{ height: "100%", margin: 0 }}>
      {/* Section image de fond */}
      <div
        style={{
          backgroundImage: `url(${ContactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "130vh", // Prend toute la hauteur de la fenêtre
          width: "100%", // Prend toute la largeur
          position: "absolute", // Position absolue pour couvrir toute la page
          top: 0, // Assure que l'image commence au sommet de la page
          left: 0, // Assure que l'image commence sur le côté gauche
          zIndex: -1, // Place l'image derrière le contenu
        }}
      ></div>

      <Header />
      <ContactForm />
      <ContactInfo />
      <OpeningHours />
      <Footer />
    </div>
  );
}

export default Contact;
