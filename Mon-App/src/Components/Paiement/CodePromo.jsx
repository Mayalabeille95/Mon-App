import React from "react";

const CodePromo = () => {
  return (
    <section>
      <h2>Code promo</h2>
      <div>
        <label htmlFor="code_promo">Entrez votre code promo :</label>
        <input
          type="text"
          id="code_promo"
          name="code_promo"
          placeholder="HIBOU10"
        />
      </div>
    </section>
  );
};

export default CodePromo;

/*
Le composant CodePromo crée une section dédiée à la saisie de codes promotionnels. 
Il affiche un titre "Code promo", un label et un champ de saisie avec un exemple de code promo prérempli. 
Cette structure simple permet aux utilisateurs d'entrer facilement un code promotionnel, 
potentiellement pour obtenir une réduction ou un avantage spécial lors d'une inscription ou d'un achat. 
Le composant est conçu de manière claire et accessible, facilitant l'interaction utilisateur.
*/
