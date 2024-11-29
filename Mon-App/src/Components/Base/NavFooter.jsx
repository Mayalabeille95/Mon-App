import { Link } from "react-router-dom"

const NavFooter = () => {
    return( 
    <div>
        
         <nav>
            <Link className="bas-de-page" to="/Home">Home</Link>
            <Link className="bas-de-page" to="/Cours">Cours</Link>
            <Link className="bas-de-page" to="/Abonnement">Abonnement</Link>
            <Link className="bas-de-page" to="/Coach">Coach</Link>
            <Link className="bas-de-page" to="/Matériel">Matériel</Link>
            <Link className="bas-de-page" to="/Contact">Contact</Link>
            <Link className="bas-de-page" to="/Inscription">Inscription</Link>
            <Link className="bas-de-page" to="/Connexion">Connexion</Link>
         </nav>
    </div>
    
    )
}

export default NavFooter;