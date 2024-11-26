import React from "react";

const TableauPanier = ({ items, total }) => {
  // Vérifier si 'items' est bien défini et est un tableau
  if (!Array.isArray(items)) {
    // Si 'items' n'est pas un tableau, initialiser un tableau vide
    items = [];
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Abonnement</th>
          <th>Durée</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          // Si 'items' contient des éléments, les afficher
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.duration}</td>
              <td>{item.price.toFixed(2)} $</td>
            </tr>
          ))
        ) : (
          // Si 'items' est vide, afficher un message ou une ligne vide
          <tr>
            <td colSpan="3">Aucun produit dans le panier</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Total</td>
          {/* Affichage du total calculé */}
          <td>{total} $</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TableauPanier;
