import React from "react";

const Faq = () => {
  return (
    <section id="faq_extrait">
      <div className="div_zone_de_texte">
        <h2 className="h2_Accueil">FAQ - Questions fréquemment posées</h2>
        <p className="p_Accueil">
          Voici les réponses aux questions les plus courantes. Si vous avez
          d'autres interrogations, n'hésitez pas à nous contacter.
        </p>
        <ul className="ul_Accueil">
          <li className="li_Accueil">
            <strong className="strong_Accueil">
              {" "}
              Proposez-vous des séances d'essais gratuites ?
            </strong>
            <p className="p_Accueil">
              Oui, nous proposons une séance d'essai gratuite pour tous les
              nouveaux membres. Réservez votre place en ligne ou contactez-nous
              pour plus d'infos.
            </p>
            <a className="a_Accueil" href="/Contact">
              En savoir plus
            </a>
          </li>
          <li className="li_Accueil">
            <strong className="strong_Accueil">
              Y'a-t-il des frais d'inscription ?
            </strong>
            <p className="p_Accueil">
              Les frais d'inscription sont de 50€ pour les nouveaux membres.
              Cependant, ils sont souvent offerts lors de certaines promotions
              ou d'événements spéciaux.
            </p>
            <a className="a_Accueil" href="/Contact">
              Plus de détails
            </a>
          </li>
          <li className="li_Accueil">
            <strong className="strong_Accueil">
              Quels cours proposez-vous ?
            </strong>
            <p className="p_Accueil">
              Nous proposons des cours collectifs de Yoga, Pilates, Zumba,
              CrossFit et bien plus. Consultez notre page des cours pour plus
              d'informations.
            </p>
            <a className="a_Accueil" href="/cours">
              Voir tous nos cours
            </a>
          </li>
          <li className="li_Accueil">
            <strong className="strong_Accueil">
              Quels sont les horaires d'ouverture ?
            </strong>
            <p className="p_Accueil">
              Nos salles sont ouvertes tous les jours de 6h à 23h. Vous pouvez
              réserver vos créneaux en ligne pour plus de flexibilité.
            </p>
            <a className="a_Accueil" href="/Contact">
              Voir les horaires détaillés
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
