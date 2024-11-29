import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <h2>INFORMATIONS DE CONTACT</h2>
      <p className="contact-texte">
        Téléphone: <a href="tel:0966786543">09 66 786 543</a> <br />
        E-mail:{" "}
        <a href="mailto:contact@GYMAttacksalle.com">
          contact@GYMAttacksalle.com
        </a>{" "}
        <br />
        Adresse:{" "}
        <a
          href="https://maps.app.goo.gl/irGoBRuxBQ5vegoq9"
          target="_blank"
          rel="noopener noreferrer"
        >
          161 Av. de Verdun, 94200 Ivry-sur-Seine
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
