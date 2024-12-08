import { Link } from "react-router-dom";

function Portrait({ image, altText, NomCoach, TypeCoach, link }) {
  return (
    <div className="Portrait">
      <Link to={link}>
        <img src={image} alt={altText} />
        <span>
          <p>
            {NomCoach} <b>{TypeCoach}</b>
          </p>
        </span>
      </Link>
    </div>
  );
}
export default Portrait;
