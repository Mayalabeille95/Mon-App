import React from "react";

const RedirectionHaut = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="redirection-haut-container">
      <button
        className="redirection-haut-button"
        title="Retour en haut"
        onClick={scrollToTop}
      >
        ↑ Haut
      </button>
    </div>
  );
};

export default RedirectionHaut;
