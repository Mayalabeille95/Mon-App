import TwitterLogo from "../../Assets/images/social media/twitter.png"
import InstagramLogo from "../../Assets/images/social media/imagesinstagram-icon.jpg"
import LinkedInLogo from "../../Assets/images/social media/linkedin.png"

function SocialMedia(){
    return(
        <div className="social-media">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram"
          className="social-link" rel="noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          aria-label="Twitter"
          className="social-link" rel="noreferrer"
        >
          <img src={TwitterLogo} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="LinkedIn"
          className="social-link" rel="noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn" />
        </a>
      </div>
    )
}
export default SocialMedia;