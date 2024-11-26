import React, { useState } from "react";
import TableauPanier from "./TableauPanier";
import RecapAbonnement from "./RecapAbonnement";
import FormPaiement from "./FormPaiement";

const Panier = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Formule Basic", duration: "12 mois", price: 239.88 },
    {
      id: 2,
      name: "Option Coach Personnel",
      duration: "5 séances",
      price: 150,
    },
    { id: 3, name: "Frais d'inscription", duration: "-", price: 50 },
  ]);

  const calculateTotal = () => {
    // Utilisation de parseFloat pour s'assurer que l'opération arithmétique se fait sur des nombres.
    return items
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <div id="panier">
      <h1 className="titre-panier">Votre Panier</h1>
      {/* Passez la fonction directement pour plus de flexibilité */}
      <TableauPanier items={items} total={calculateTotal} />
      <RecapAbonnement />
      <FormPaiement />
    </div>
  );
};

export default Panier;
