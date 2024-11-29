import React from "react";
import gymlogo from "../../Assets/images/gym-logo.png"
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <header>
      <a className="logo" href="/Home">
        <img
          className="logo"
          src={gymlogo}
          alt="logo de salle de sport"
        />
      </a>
      <NavHeader/>
    </header>
  );
};

export default Header;
