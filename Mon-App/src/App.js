import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cours from "./Pages/Cours";
import Contact from "./Pages/Contact";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import NotFound from "./Pages/NotFound";
import Abonnement from "./Pages/Abonnenemnt";
import MotDePasseOublié from "./Pages/MotDePasseOublié";
import Materiel from "./Pages/Matériel";
import Coach from "./Pages/Coach";
import Paiement from "./Pages/Paiement";
import PagePanier from "./Pages/Panier";
import AdminStats from "./Pages/AdminStats";
import VideoMatériel from "./Pages/VideoMatériel";
import BasDuCorps from "./Pages/BasDuCorps";
import Cardio from "./Pages/Cardio";
import HautDuCorps from "./Pages/HautDuCorps";
import { ThemeProvider } from "./Components/Accueil/ThemContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home2" element={<Home2 />} />
            <Route path="/Cours" element={<Cours />} />
            <Route path="/Abonnement" element={<Abonnement />} />
            <Route path="/Panier" element={<PagePanier />} />
            <Route path="/Paiement" element={<Paiement />} />
            <Route path="/Coach" element={<Coach />} />
            <Route path="/HautDuCorps" element={<HautDuCorps />} />
            <Route path="/BasDuCorps" element={<BasDuCorps />} />
            <Route path="/Cardio" element={<Cardio />} />
            <Route path="/Matériel" element={<Materiel />} />
            <Route path="/VideoMatériel" element={<VideoMatériel />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/AdminStats" element={<AdminStats />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/MotDePasseOublié" element={<MotDePasseOublié />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
