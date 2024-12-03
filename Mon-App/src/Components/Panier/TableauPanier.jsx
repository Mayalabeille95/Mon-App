import React from "react";

const TableauPanier = ({ items, total }) => {
  // Vérifier si 'items' est bien défini et est un tableau
  if (!Array.isArray(items)) {
    items = []; // Initialiser un tableau vide si items n'est pas un tableau
  }

  // S'assurer que 'total' est un nombre valide
  const totalAmount = typeof total === "number" ? total.toFixed(2) : "0.00";

  // Si le tableau est vide, afficher un message ou rien
  if (items.length === 0) {
    return;
  }

  return (
    <div className="divInfoPanier">
      <h2 className="h2Panier">Informations sur l'abonnement</h2>
      <table className="tablePanier">
        <thead className="theadPanier">
          <tr className="trPanier">
            <th className="thPanier">Abonnement</th>
            <th>Durée</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody className="tbodyPanier">
          {items.map((item) => (
            <tr
              className="trPanier"
              key={item.id}
              style={{
                backgroundColor: item.isSelected ? "#d3f8d3" : "white",
              }}
            >
              <td className="tdPanier">{item.name}</td>
              <td className="tdPanier">{item.duration}</td>
              <td className="tdPanier">{item.price.toFixed(2)} $</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="tfootPanier">
          <tr className="trPanier">
            <td className="tdPanier" colSpan="2">
              <strong>Total</strong>
            </td>
            <td className="tdPanier">
              <strong>{totalAmount} $</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableauPanier;

/*
Le composant TableauPanier affiche les détails des articles présents dans le panier de l'utilisateur,
 y compris le nom de l'abonnement, sa durée et son prix. Il vérifie d'abord si la liste des articles 
 est un tableau valide et initialise un tableau vide si ce n'est pas le cas. La table présente les informations 
 de manière structurée, avec un total calculé affiché dans le pied de page. Si aucun produit n'est dans le panier, 
 un message approprié est affiché. De plus, il indique si un abonnement a été sélectionné, renforçant ainsi l'interaction 
 utilisateur en fournissant des retours clairs sur l'état du panier.
*/
