import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import AbonnementTitre from "../Components/Abonnement/AbonnementTitre";
import AvecABonnement from "../Components/Abonnement/AvecAbonnemment";
import SansAbonnement from "../Components/Abonnement/SansAbonnement";
import PourquoiSabonner from "../Components/Abonnement/PourquoiSabonner";
import RedirectionVideo from "../Components/Abonnement/RedirectionVideo";
import Support from "../Components/Abonnement/Support";
import QuestionFrequente from "../Components/Abonnement/QuestionFrequente";


function Abonnement(){ 
return(
     <div>
            <Header/>
            <AbonnementTitre/>
            <AvecABonnement/>
            <SansAbonnement/>
            <PourquoiSabonner/>
            <QuestionFrequente/>
            <RedirectionVideo/>
            <Support/>
            <Footer/>
    </div>)}
export default Abonnement;