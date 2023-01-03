import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Curriculum from "../../assets/cv web developer.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import AboutHome from "./AboutHome/AboutHome";
import WorksHome from "./WorksHome/WorksHome";
import LetsTalkHome from "./LetsTalksHome/LetsTalkHome";
const Home = () => {
  AOS.init();
  return (
    <div className="Home">
      <div className="Home_Container">
        <div className="Title_Presentation">
          <h3
            className="Title_Career"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "React Js",
                    "Bootstrap",
                    "TailWind",
                    "JavaScript",
                    "Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
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
        <div
          className="MoreContent_Container"
          data-aos="fade-down-right"
          data-aos-duration="1400"
        >
          <p className="Down_Arrow">
            <box-icon
              name="chevrons-down"
              type="solid"
              animation="fade-down"
              color="#ffffff"
              size="2.5rem"
            ></box-icon>
          </p>
          <p className="Keep_Scrolling">
            Keep <br /> scrolling
          </p>
          <div className="OpenForWork_Container">
            <a href="mailto:sebastiancantorvc@gmail.com?Subject=Job%20Opportunity" className="Lets_Talk">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="Background_Gif"></div>
      </div>
      <AboutHome />
      <WorksHome/>
      <LetsTalkHome/>
    </div>
  );
};

export default Home;
