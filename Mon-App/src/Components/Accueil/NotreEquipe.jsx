import React from "react";
import coach1 from "../../Assets/images/social media/lechaptois.jpg";
import coach2 from "../../Assets/images/social media/CoachWild.png";
import coach3 from "../../Assets/images/social media/hautducorp.jpg";
import coach4 from "../../Assets/images/social media/coachcardio.jpg";
import Portrait from "./NotreEquipePortraits";
import logoteam from "../../Assets/images/social media/logoteam.png";
function NotreEquipe() {
  return (
    <section className="Notre-Equipe-Section">
      <h2>
        <img className="LogoTeam" src={logoteam} alt="logo haltere" />
        DéCOUVREZ NOTRE éQUIPE
      </h2>
      <div className="Effectif">
        <Portrait
          image={coach1}
          altText="portrait de Christophe Lechaptois Coach Fitness"
          NomCoach="Christophe Lechaptois"
          TypeCoach=" Coach Haut du corps"
        />

        <Portrait
          image={coach2}
          altText="portrait de William Kanubi Coach Explosivité "
          NomCoach="William Kanubi"
          TypeCoach=" Coach Haut du corps"
        />

        <Portrait
          image={coach3}
          altText="portrait de Christophe DEPAY Coach Mobilité "
          NomCoach="Christophe DEPAY"
          TypeCoach=" Coach Bas du corps"
        />

        <Portrait
          image={coach4}
          altText="portrait Joseph Debuchy de Coach Force "
          NomCoach="Joseph Debuchy"
          TypeCoach=" Coach Cardio"
        />
      </div>
    </section>
  );
}
export default NotreEquipe;
