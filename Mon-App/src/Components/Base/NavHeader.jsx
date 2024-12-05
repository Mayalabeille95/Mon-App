import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <div>
      <nav>
        <Link to="/Home">Accueil</Link>
        <Link to="/Cours">Cours</Link>
        <Link to="/Abonnement">Abonnement</Link>
        <Link to="/Coach">Coach</Link>
        <Link to="/Matériel">Exercice</Link>
        <Link to="/Contact">Nous contacter</Link>
        <Link to="/Inscription" className="inscription">
          S'inscrire
        </Link>
        <Link to="/Connexion" className="connexion">
          Connexion
        </Link>
      </nav>
    </div>
  );
};

export default NavHeader;

/*
Le composant NavHeader crée la navigation principale pour l'en-tête du site.
 Il utilise le composant Link de React Router pour générer des liens vers les différentes sections du site,
  telles que la page d'accueil, les cours, l'abonnement, et d'autres pages importantes.
   Cette structure de navigation permet aux utilisateurs de naviguer facilement à travers le site depuis n'importe quelle page,
    améliorant ainsi l'expérience utilisateur et l'accessibilité du contenu.
*/
