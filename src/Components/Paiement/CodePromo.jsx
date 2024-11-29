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
