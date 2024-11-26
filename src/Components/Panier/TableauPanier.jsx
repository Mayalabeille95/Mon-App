import React from "react";

const TableauPanier = ({ items, total }) => {
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
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.duration}</td>
            <td>{item.price.toFixed(2)} $</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Total</td>
          {/* Appel de la fonction `total()` pour recalculer si nécessaire */}
          <td>{total()} $</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TableauPanier;
