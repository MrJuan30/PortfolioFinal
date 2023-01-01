import React from "react";
import "./NavBar.css";

const NavBarBtn = ({ Clicked, handleClick }) => {
  return (
    <div className="Menu_Btn">
      <div className={`Navbtn ${Clicked ? "Closed" : "Menu"}`}>
        <button onClick={handleClick} className="Menu_Btn">
          <box-icon name="library" color="#fbfbfb" size="3rem"></box-icon>
        </button>
      </div>
      <div className={`Navbtn ${Clicked ? "Menu" : "Closed"}`}>
        <button onClick={handleClick} className="Menu_Btn">
          <box-icon name="x" color="#fbfbfb" size="4rem"></box-icon>
        </button>
      </div>
    </div>
  );
};

export default NavBarBtn;
