import React, { useState } from "react";
import TableauPanier from "./TableauPanier";
import RecapAbonnement from "./RecapAbonnement";

const Panier = () => {
  const [items] = useState([
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
    return items
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2); // Calcul du total avec 2 décimales
  };

  return (
    <div id="panier">
      <h1 className="titre-panier">Votre Panier</h1>
      {/* Passe la fonction calculateTotal directement pour plus de flexibilité */}
      <TableauPanier items={items} total={calculateTotal()} />
      <RecapAbonnement />
    </div>
  );
};

export default Panier;

/*
Le composant Panier gère l'affichage des articles sélectionnés par l'utilisateur pour son abonnement.
Il utilise le hook useState pour stocker une liste d'articles, comprenant des formules d'abonnement 
et des options supplémentaires. La fonction calculateTotal calcule le montant total du panier en additionnant 
les prix des articles, formaté avec deux décimales. Ce composant intègre également les sous-composants TableauPanier, 
qui affiche les détails des articles et le total, ainsi que RecapAbonnement, offrant ainsi une vue d'ensemble claire 
et organisée des choix de l'utilisateur avant de procéder au paiement.
*/
