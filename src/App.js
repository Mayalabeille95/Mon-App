import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cours from "./Pages/Cours";
import Contact from "./Pages/Contact";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import NotFound from "./Pages/NotFound";
import Abonnement from "./Pages/Abonnenemnt";
import MotDePasseOublié from "./Pages/Mot de passe oublié";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cours" element={<Cours />} />
          <Route path="/Abonnement" element={<Abonnement />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Mot de Passe oublié" element={<MotDePasseOublié />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
