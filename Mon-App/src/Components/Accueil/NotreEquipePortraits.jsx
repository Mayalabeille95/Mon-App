import React from "react";

function Portrait({ image, altText, NomCoach, TypeCoach, Link }) {
  return (
    <div className="Portrait">
      <img src={image} alt={altText} />
      <span>
        <p>
          {NomCoach} <b>{TypeCoach}</b>
        </p>
      </span>
    </div>
  );
}
export default Portrait;
