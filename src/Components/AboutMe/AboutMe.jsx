import React from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Curriculum from "../../assets/Cv.pdf";
import Information from "./Technologies/Information";
import LetsTalkHome from "../Home/LetsTalksHome/LetsTalkHome";

const AboutMe = () => {
  AOS.init();
  return (
    <div className="AboutMe">
      <div className="AboutMe_Container">
        <div className="AboutMe-Title_Container">
          <h1
            className="Title_Name TitleNameOne"
            data-aos="fade-up-right"
            data-aos-duration="400"
          >
            Juan
          </h1>
          <h1
            className="Title_Name"
            data-aos="fade-up-right"
            data-aos-duration="400"
          >
            Sebastian
          </h1>
          <br />
          <h1
            className="Title_Name"
            data-aos="fade-up-left"
            data-aos-duration="800"
          >
            Cantor
          </h1>
        </div>
        <div className="Resume_Container" data-aos="fade-up">
          <a href={Curriculum} download="File" className="Download_Cv_Btn">
            DOWNLOAD CV
          </a>
        </div>
        <div className="Background_Gif_AboutMe"></div>
      </div>
      <Information/>
      <LetsTalkHome/>
    </div>
  );
};

export default AboutMe;
