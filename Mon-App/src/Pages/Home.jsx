import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import RedirectionHaut from "../Components/Matériel/RedirectionHaut";

function Home() {
  return (
    <div>
      <Header />
      <div className="Contenu">
        <h1>PAGE D'ACCUEIL</h1>
      </div>
      <Footer />
      <RedirectionHaut />
    </div>
  );
}
export default Home;
