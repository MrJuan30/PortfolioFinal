import React from "react";
import Logo from "../../assets/LogoImg.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBarBtn from "./NavBarBtn";
import "./NavBar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navlist from "./Navlist";

const Navbar = () => {
  const [Clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!Clicked);
  };
  //despues de el boton de la navbar colocar el boton del modo oscuro
  AOS.init();
  return (
    <div className="NavBar">
      <div className="NavBar_Container">
        <div className="NavBar_Content" data-aos="fade-up">
          <img src={Logo} alt="Logo" className="Logo_Image" />
          <NavBarBtn Clicked={Clicked} handleClick={handleClick} />
          <a
            href="https://wa.me/+573105985692?text=I%20Have%20a%20job%20opportunity%20for%20you"
            target="_blank"
          >
            <box-icon
              name="whatsapp"
              type="logo"
              animation="tada"
              color="#ffffff"
              size="3rem"
            ></box-icon>
          </a>
        </div>
        <br />
        {Clicked ? (
          <Navlist Clicked={Clicked} handleClick={handleClick} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
