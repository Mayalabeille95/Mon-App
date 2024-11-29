import React from "react";
import Header from "../Components/Base/Header";
import Footer from "../Components/Base/Footer";
import PaiementContainer from "../Components/Paiement/PaiementContainer"; // Import du container principal

function Paiement() {
  return (
    <div>
      <Header />
      {/* Container principal du paiement contenant le récapitulatif et le formulaire */}
      <PaiementContainer />
      <Footer />
    </div>
  );
}

export default Paiement;
