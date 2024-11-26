import React from "react";

const TableauPanier = ({ items, total }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Abonnement</th>
            <th>Durée</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.duration}</td>
              <td>{item.price.toFixed(2)} $</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>{total} $</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableauPanier;
