import React from "react";

const ContactInfo = () => {
  return (
    <section className="Tout_Contact1">
      <div className="div_contact1">
        <h2 className="h2_contact">INFORMATIONS DE CONTACT</h2>
        <p className="p_contact">
          Téléphone:{" "}
          <a className="a_contact" href="tel:0966786543">
            09 66 786 543
          </a>{" "}
          <br />
          E-mail:{" "}
          <a className="a_contact" href="mailto:contact@GYMAttacksalle.com">
            contact@GYMAttacksalle.com
          </a>{" "}
          <br />
          Adresse:{" "}
          <a
            className="a_contact"
            href="https://maps.app.goo.gl/irGoBRuxBQ5vegoq9"
            target="_blank"
            rel="noopener noreferrer"
          >
            161 Av. de Verdun, 94200 Ivry-sur-Seine
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;

/*
Le composant ContactInfo affiche les informations de contact essentielles pour GYM Attack.
Il présente un titre "INFORMATIONS DE CONTACT" suivi des détails de contact incluant le numéro de téléphone,
l'adresse e-mail et l'adresse physique. Chaque élément est rendu interactif : 
le numéro de téléphone est cliquable pour initier un appel, 
l'e-mail pour ouvrir le client de messagerie par défaut, et l'adresse physique est liée à Google Maps pour une localisation facile. 
Cette structure permet aux utilisateurs d'accéder rapidement aux différentes méthodes de contact, 
améliorant ainsi l'expérience utilisateur et facilitant la communication avec la salle de sport.
*/
