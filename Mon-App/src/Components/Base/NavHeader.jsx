import { Link } from "react-router-dom"

const NavHeader = () => {
    return( 
    <div>
        
         <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Cours">Cours</Link>
            <Link to="/Abonnement">Abonnement</Link>
            <Link to="/Coach">Coach</Link>
            <Link to="/Matériel">Matériel</Link>
            <Link to="/Contact">Nous contacter</Link>
            <Link to="/Inscription">s'inscrire</Link>
            <Link to="/Connexion">Connexion</Link>
         </nav>
    </div>
    
    )
}

export default NavHeader