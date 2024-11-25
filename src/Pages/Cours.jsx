import React from "react";
import Footer from "../Components/Base/Footer";
import Header from "../Components/Base/Header";
import CoursRaisons from "../Components/Cours/CoursRaisons";
import NosCours from "../Components/Cours/NosCours";

function Cours (){
return(
    <div>
        <Header/>
        <CoursRaisons/>
        <NosCours/>
        <Footer/>
    </div>
    
)
}
export default Cours;