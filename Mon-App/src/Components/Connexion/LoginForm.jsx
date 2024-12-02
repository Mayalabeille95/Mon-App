import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ajout de useNavigate pour la redirection

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Hook pour gérer la redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "admin@gymattack.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      console.log("Connexion réussie !");
      // Ouvrir un nouvel onglet avec l'URL de la page AdminStats
      window.open("/AdminStats", "_blank");
      // Rafraîchir la page de connexion
      window.location.reload();
    } else {
      console.log("Échec de la connexion : Identifiants incorrects.");
      alert("Adresse email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="fullscreen">
      <h1 className="fullscreenh1">Bienvenue</h1>
      <form className="form-contact" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="mail-input">Mail</label>
          <input
            type="email"
            id="mail-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mdp-input">Mot de passe</label>
          <input
            type="password"
            id="mdp-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link id="pwd-forget" to="/Mot de passe oublié">
            Mot de passe oublié ?
          </Link>
          <Link id="pwd-forget" to="/Inscription">
            Inscription
          </Link>
        </div>
        <label id="rememberMe">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Se souvenir de moi
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginForm;
