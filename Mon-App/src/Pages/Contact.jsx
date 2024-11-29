import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import ContactForm from "../Components/NousContacter.jsx/ContactForm";
import ContactInfo from "../Components/NousContacter.jsx/ContactInfo";
import OpeningHours from "../Components/NousContacter.jsx/OpeningHours";

function Contact() {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactInfo />
      <OpeningHours />
      <Footer />
    </div>
  );
}
export default Contact;
