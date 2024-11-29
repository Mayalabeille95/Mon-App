import React from "react";

const RecapCommande = () => {
  return (
    <section id="recap">
      <h1>Paiement de votre abonnement</h1>
      <table>
        <tr>
          <th>Abonnement</th>
          <td>Formule Fitness Premium</td>
        </tr>
        <tr>
          <th>Durée</th>
          <td>12 mois</td>
        </tr>
        <tr>
          <th>Prix mensuel</th>
          <td>39,99 €</td>
        </tr>
        <tr>
          <th>Total annuel</th>
          <td>479,88 €</td>
        </tr>
      </table>
    </section>
  );
};

export default RecapCommande;
