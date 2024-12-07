import React, { createContext, useState, useContext, useEffect } from "react";

// Créez le contexte
const ThemeContext = createContext();

// Fournisseur du contexte
export const ThemeProvider = ({ children }) => {
  // Initialisez le thème à partir de localStorage ou utilisez "light" par défaut
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Sauvegarde le thème dans localStorage
  };

  // Applique le thème lors du montage du composant
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useTheme = () => useContext(ThemeContext);
