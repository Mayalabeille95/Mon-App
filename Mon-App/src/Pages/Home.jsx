import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import LocalisationForm from "../Components/Accueil/LocalisationForm";
import ThemeSelector from "../Components/Accueil/ThemeSelector";

function Home() {
  return (
    <div>
      <Header />
      <ThemeSelector />
      <LocalisationForm />
      <Footer />
    </div>
  );
}

export default Home;
