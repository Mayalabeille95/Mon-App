import React from "react";

function CoursesSection() {
  return (
    <section className="courses-section">
      <h2>Nos Programmes Haut du Corps</h2>
      <div className="courses-container">
        <div className="course-box">
          <h3>Entraînement de Force</h3>
          <p>
            Programme spécifique pour développer la puissance musculaire du haut
            du corps, incluant des exercices d'haltérophilie et de musculation.
          </p>
          <a href="/Inscription" className="btn-secondary">
            Démarrer le Programme
          </a>
        </div>

        <div className="course-box">
          <h3>Hypertrophie Musculaire</h3>
          <p>
            Programme conçu pour sculpter et augmenter la masse musculaire du
            haut du corps avec un focus sur les pectoraux, les épaules et les
            bras.
          </p>
          <a href="/Inscription" className="btn-secondary">
            Démarrer le Programme
          </a>
        </div>

        <div className="course-box">
          <h3>Renforcement Fonctionnel</h3>
          <p>
            Améliore ta mobilité, ta stabilité et ta force fonctionnelle avec
            des exercices qui t'aideront à mieux performer dans toutes tes
            activités.
          </p>
          <a href="/Inscription" className="btn-secondary">
            Démarrer le Programme
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
