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

/*
Le composant RecapCommande fournit un récapitulatif clair des détails de l'abonnement 
que l'utilisateur s'apprête à payer. Il affiche les informations essentielles dans un tableau,
 y compris le type d'abonnement, la durée, le prix mensuel et le total annuel. 
 Cette présentation organisée permet aux utilisateurs de vérifier rapidement 
 les informations avant de finaliser leur paiement, contribuant ainsi à une expérience
  utilisateur positive et transparente. Ce composant joue un rôle clé dans le processus 
  de paiement en assurant que les utilisateurs sont bien informés des coûts associés à leur abonnement.
*/
