import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navlist = ({ Clicked, handleClick }) => {
  AOS.init();
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className={`NavList ${Clicked ? "open" : ""}`}
    >
      <ul className="NavList_List">
        <li
          className="NavList_Item"
          data-aos="flip-down"
          data-aos-duration="1800"
          data-aos-delay="1300"
        >
          <NavLink to="/" className="NavList_Title">
            Home
          </NavLink>
        </li>
        <li
          className="NavList_Item"
          data-aos="flip-down"
          data-aos-duration="1800"
          data-aos-delay="1500"
        >
          <NavLink to="/About" className="NavList_Title">
            About
          </NavLink>
        </li>
        <li
          className="NavList_Item"
          data-aos="flip-down"
          data-aos-duration="1800"
          data-aos-delay="1700"
        >
          <NavLink to="/Works" className="NavList_Title">
            Works
          </NavLink>
        </li>
        <div
          className="ContactMe_Container"
          data-aos="flip-down"
          data-aos-duration="1800"
          data-aos-delay="1900"
        >
          <p className="StartProyect_Text">Want To Start A Proyect?</p>
          <li className="NavList_Item">
            <a
              href="mailto:sebastiancantorvc@gmail.com?Subject=Job%20Opportunity"
              className="NavList_Title LetsTalk"
            >
              Let's Talk
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navlist;
