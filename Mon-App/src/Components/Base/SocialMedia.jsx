import TwitterLogo from "../../Assets/images/social media/twitter.png";
import InstagramLogo from "../../Assets/images/social media/imagesinstagram-icon.jpg";
import LinkedInLogo from "../../Assets/images/social media/linkedin.png";

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Instagram"
        className="social-link"
        rel="noreferrer"
      >
        <img src={InstagramLogo} alt="Instagram" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        aria-label="Twitter"
        className="social-link"
        rel="noreferrer"
      >
        <img src={TwitterLogo} alt="Twitter" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        aria-label="LinkedIn"
        className="social-link"
        rel="noreferrer"
      >
        <img src={LinkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  );
}
export default SocialMedia;

/*
Le composant SocialMedia crée une section de liens vers les réseaux sociaux pour le site web
 Il importe les logos des plateformes (Twitter, Instagram, LinkedIn)
  et les utilise pour créer des liens cliquables vers les pages correspondantes. 
  Chaque lien s'ouvre dans un nouvel onglet, est stylisé avec la classe "social-link", 
  et inclut des attributs d'accessibilité. Cette structure permet une intégration facile des réseaux sociaux dans le site, 
  améliorant ainsi la présence en ligne et l'engagement des utilisateurs.
*/
