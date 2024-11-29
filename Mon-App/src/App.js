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
import Materiel from "./Pages/Matériel";
import Coach from "./Pages/Coach";
import Paiement from "./Pages/Paiement";
import PagePanier from "./Pages/Panier";
import AdminStats from "./Pages/AdminStats";

// function App

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cours" element={<Cours />} />
          <Route path="/Abonnement" element={<Abonnement />} />
          <Route path="/Panier" element={<PagePanier />} />
          <Route path="/Paiement" element={<Paiement />} />
          <Route path="/Coach" element={<Coach />} />
          <Route path="/Matériel" element={<Materiel />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="*" element={<AdminStats />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Mot de Passe oublié" element={<MotDePasseOublié />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
