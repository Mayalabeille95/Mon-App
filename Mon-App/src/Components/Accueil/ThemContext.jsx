import React, { createContext, useState, useContext } from "react";

// Créez le contexte
const ThemeContext = createContext();

// Fournisseur du contexte
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Thème par défaut : "light"

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // Applique le thème à la racine
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useTheme = () => useContext(ThemeContext);
