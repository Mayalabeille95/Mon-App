import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import FormPaiement from "../Components/Panier/FormPaiement";
import Panier from "../Components/Panier/Panier";
import RecapAbonnement from "../Components/Panier/RecapAbonnement";
import TableauPanier from "../Components/Panier/TableauPanier";

// Renommer la fonction principale pour éviter le conflit de noms
function PagePanier() {
  return (
    <div>
      <Header />
      <FormPaiement />
      <Panier />
      <RecapAbonnement />
      <TableauPanier />
      <Footer />
    </div>
  );
}

export default PagePanier;
