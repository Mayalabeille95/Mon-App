import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <div>
      <nav>
        <Link className="bas-de-page" to="/Home">
          Accueil
        </Link>
        <Link className="bas-de-page" to="/Cours">
          Cours
        </Link>
        <Link className="bas-de-page" to="/Abonnement">
          Abonnement
        </Link>
        <Link className="bas-de-page" to="/Coach">
          Coach
        </Link>
        <Link className="bas-de-page" to="/Matériel">
          Matériel
        </Link>
        <Link className="bas-de-page" to="/Contact">
          Contact
        </Link>
        <Link className="bas-de-page" to="/Inscription">
          Inscription
        </Link>
        <Link className="bas-de-page" to="/Connexion">
          Connexion
        </Link>
      </nav>
    </div>
  );
};

export default NavFooter;

/*
Le composant NavFooter crée une navigation pour le pied de page du site.
Il utilise le composant Link de React Router pour générer des liens vers différentes pages du site,
 comme l'accueil, les cours, l'abonnement, et d'autres sections importantes.
  Chaque lien est stylisé avec la classe "bas-de-page" pour une présentation cohérente. 
  Cette structure facilite la navigation à travers le site depuis le pied de page, 
  améliorant ainsi l'expérience utilisateur et l'accessibilité du contenu.
*/
