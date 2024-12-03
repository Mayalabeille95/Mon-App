import React from "react";

const RecapAbonnement = () => {
  return (
    <>
      <h2 className="h2Panier">Récapitulatif de votre abonnement</h2>

      <div className="divTableauPanier">
        <ul className="ulPanier">
          <li className="liPanier">
            Accès illimité à toutes les salles du réseau
          </li>
          <li className="liPanier">Cours collectifs inclus</li>
          <li className="liPanier">5 séances avec un coach personnel</li>
          <li className="liPanier">Engagement de 12 mois</li>
        </ul>
      </div>
    </>
  );
};

export default RecapAbonnement;

/*
Le composant RecapAbonnement fournit un récapitulatif des avantages associés à l'abonnement 
choisi par l'utilisateur. Il affiche un titre et une liste d'éléments qui détaillent les services inclus, 
tels que l'accès illimité aux salles, les cours collectifs, les séances avec un coach personnel, 
et la durée d'engagement. Cette présentation claire et concise permet aux utilisateurs de comprendre 
rapidement ce qu'ils obtiennent avec leur abonnement, renforçant ainsi la transparence et la satisfaction client. 
Ce composant joue un rôle important dans le processus de décision d'achat en soulignant les bénéfices de l'abonnement.
*/
