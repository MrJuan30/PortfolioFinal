import React from "react";
import "./LetsTalkHome.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const LetsTalkHome = () => {
  AOS.init();
  return (
    <div className="LetsTalkHome">
      <div className="LetsTalkHome_Container">
        <h1
          className="LetsTalk_Title"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          Want to Start a Project?
        </h1>
        <a
          href="mailto:sebastiancantorvc@gmail.com?Subject=Job%20Opportunity"
          className="Lets_Talk_LetsTalkHome"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          Let's Talk
        </a>
        <div className="Footer">
          <div className="Footer_Container">
            <p
              className="DesignedByText"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="900"
            >
              Designed By: Sebastian Cantor
            </p>
            <br />
            <a
              href="mailto:sebastiancantorvc@gmail.com?Subject=Job%20Opportunity"
              target="_blank"
              className="ContactMeByEmail_Text"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="1200"
            >
              Contact Me By Email {""}
              <box-icon
                name="right-top-arrow-circle"
                animation="tada"
                color="#fcf3ea"
                size="2rem"
              ></box-icon>
            </a>
            <br />
            <div className="Media_Logos_Container">
              <a
                href="https://twitter.com/JuanSeb58137501"
                target="_blank"
                className="SocialMedia_Text"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="1500"
              >
                TW
                <box-icon name="twitter" type="logo" color="#ffffff" size='2rem'></box-icon>
              </a>
              <br />
              <a
                href="https://github.com/MrJuan30"
                target="_blank"
                className="SocialMedia_Text"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="1800"
              >
                GH
                <box-icon name="github" type="logo" color="#ffffff" size='2rem'></box-icon>
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/juan-cantor-vaca/"
                target="_blank"
                className="SocialMedia_Text"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="2100"
              >
                LN
                <box-icon
                  name="linkedin-square"
                  type="logo"
                  color="#ffffff"
                  size='2rem'
                ></box-icon>
              </a>
            </div>
          </div>
        </div>
        <div className="Background_Gif_LetsTalkHome"></div>
      </div>
    </div>
  );
};

export default LetsTalkHome;
