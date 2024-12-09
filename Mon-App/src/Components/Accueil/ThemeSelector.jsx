import React from "react";
import { useTheme } from "../Accueil/ThemContext";

const ThemeSelector = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="theme-selector">
      <p>Thème actuel : {theme}</p>
      <button onClick={() => changeTheme("light")}>Clair</button>
      <button onClick={() => changeTheme("blue")}>Moyen</button>
      <button onClick={() => changeTheme("dark")}>Sombre</button>
    </div>
  );
};

export default ThemeSelector;
