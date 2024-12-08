import React from "react";

const OpeningHours = () => {
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();

    // Heures d'ouverture du lundi au vendredi (6h - 23h)
    if (day >= 1 && day <= 5 && hour >= 6 && hour < 23) {
      return true;
    }
    // Heures d'ouverture le dimanche et les jours fériés (9h - 14h)
    if ((day === 0 || isHoliday()) && hour >= 9 && hour < 14) {
      return true;
    }
    return false;
  };

  // Fonction pour vérifier si c'est un jour férié (exemple simple)
  const isHoliday = () => {
    // Ici, vous pouvez implémenter une logique pour vérifier les jours fériés
    return false;
  };

  return (
    <section className="Tout_Contact">
      <div className="div_contact1">
        <h2 className="h2_contact">OUVERTURE</h2>
        <p className="p_contact">
          Du Lundi au Samedi
          <br />
          De 6h à 23h
        </p>
        <br />
        <h2 className="h2_contact">JOURS FÉRIÉS / DIMANCHE</h2>
        <p className="p_contact">9h à 14h</p>
        <br />
        <h3 className="h3_contact">
          {isOpen()
            ? "Nous sommes actuellement ouverts !"
            : "Nous sommes actuellement fermés."}
        </h3>
      </div>
    </section>
  );
};

export default OpeningHours;

/*
Le composant OpeningHours affiche les horaires d'ouverture de GYM Attack et indique si la salle est actuellement ouverte ou fermée. Il comprend :
- Une fonction isOpen() qui détermine si la salle est ouverte en fonction de l'heure et du jour actuels.
- Une fonction isHoliday() (à implémenter) pour vérifier les jours fériés.
- L'affichage des horaires d'ouverture pour les jours de semaine et les dimanches/jours fériés.
- Un message dynamique indiquant si la salle est actuellement ouverte ou fermée.
Ce composant fournit des informations claires sur les heures d'ouverture et l'état actuel de la salle, améliorant ainsi l'expérience utilisateur en offrant des informations en temps réel.
*/
