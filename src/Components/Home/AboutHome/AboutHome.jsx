import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import "./AboutHome.css";

const AboutHome = () => {
  AOS.init();
  return (
    <div className="About">
      <div className="About_Container">
        <div className="AboutMeText_Container">
          <p
            className="AboutMeShort_Text"
            data-aos="fade-down-right"
            data-aos-duration="5000"
            data-aos-delay="400"
          >
            Hi, <span>Sebastian</span> here.
            <br />
            <br />I am a software engineer who constantly seeks out innovative
            solutions to everyday problems. <br /> <br /> I especially enjoy watching code
            bring to life an entirely new beautiful thing, it's magical. <br />{" "}
            I hope you enjoy my work.
          </p>
          <br />
          <br />
          <div className="MoreInfo_Container">
            <NavLink
              to="/About"
              className="MoreInfo"
              data-aos="fade-down"
              data-aos-duration="5000"
              data-aos-delay="400"
            >
              More Info
            </NavLink>
          </div>
        </div>
        <div className="Background_Gif_About"></div>
      </div>
    </div>
  );
};

export default AboutHome;
