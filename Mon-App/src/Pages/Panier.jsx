import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import Panier from "../Components/Panier/Panier"; // FormPaiement est déjà inclus dans Panier
import TableauPanier from "../Components/Panier/TableauPanier";
import FormPaiement from "../Components/Panier/FormPaiement";

function PagePanier() {
  return (
    <div>
      <Header />
      <Panier /> {/* Panier inclut FormPaiement */}
      <TableauPanier />
      <FormPaiement />
      <Footer />
    </div>
  );
}

export default PagePanier;
