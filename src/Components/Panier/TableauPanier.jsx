import React from "react";

const TableauPanier = ({ items, total }) => {
  // Vérifier si 'items' est bien défini et est un tableau
  if (!Array.isArray(items)) {
    // Si 'items' n'est pas un tableau, initialiser un tableau vide
    items = [];
  }

  return (
    <div>
      <h2>Informations sur l'abonnement</h2>
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
              <tr
                key={item.id}
                style={{
                  backgroundColor: item.isSelected ? "#d3f8d3" : "white",
                }}
              >
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
            <td colSpan="2">
              <strong>Total</strong>
            </td>
            {/* Affichage du total calculé */}
            <td>
              <strong>{total} $</strong>
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Si aucun abonnement n'est sélectionné, afficher un message supplémentaire */}
      {items.some((item) => item.isSelected) ? (
        <p>Un abonnement a été sélectionné !</p>
      ) : (
        <p>Aucun abonnement sélectionné pour le moment.</p>
      )}
    </div>
  );
};

export default TableauPanier;
