import React from "react";
import { NavLink } from "react-router-dom";
import Pokedex from "../../../assets/Pokedex.jpeg";
import Rick from "../../../assets/RickAndMorty.jpeg";
import Clock from "../../../assets/Reloj.jpeg";
import "./WorksHome.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WorksHome = () => {
  AOS.init();
  return (
    <div>
      <div className="Works">
        <div className="Works_Container">
          <div className="WorksTitle_Container">
            <h3
              className="Work_Title"
              data-aos="zoom-out-right"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              Featured <br /> Works
            </h3>
          </div>
          <div className="Works_Descriptions">
            <div
              className="Card_Container"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="Card_Header">
                <a href="https://pokedex-seb.netlify.app" target="_blank">
                  <img src={Pokedex} alt="" className="Card_Image" />
                </a>
              </div>
              <div className="Card_Information">
                <div className="Card_Title">
                  <h5 className="Card_Title-text">Pokedex</h5>
                </div>
                <div className="Card_Description">
                  <p className="Card_Description-Text">
                    Pokedex proyect created with React JS, using axios to make
                    the petition to the API, using CSS and JS to make the
                    animations and styles.
                  </p>
                  <a
                    href="https://pokedex-seb.netlify.app"
                    target="_blank"
                    className="Link_Proyect"
                  >
                    HERE
                  </a>
                </div>
              </div>
            </div>
            <div
              className="Card_Container"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="Card_Header">
                <a
                  href="https://rickandwikisebastian.netlify.app"
                  target="_blank"
                >
                  <img src={Rick} alt="" className="Card_Image" />
                </a>
              </div>
              <div className="Card_Information">
                <div className="Card_Title">
                  <h5 className="Card_Title-text">Rick Wiki</h5>
                </div>
                <div className="Card_Description">
                  <p className="Card_Description-Text">
                    Rick And Morty character wiki proyect created with React JS,
                    using axios to make the petition to the API, using CSS and
                    JavaScript to make the animations and styles.
                  </p>
                  <a
                    href="https://rickandwikisebastian.netlify.app"
                    target="_blank"
                    className="Link_Proyect"
                  >
                    HERE
                  </a>
                </div>
              </div>
            </div>
            <div
              className="Card_Container"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="Card_Header">
                <a href="https://reloj-alltimes.netlify.app" target="_blank">
                  <img src={Clock} alt="" className="Card_Image" />
                </a>
              </div>
              <div className="Card_Information">
                <div className="Card_Title">
                  <h5 className="Card_Title-text">Clock</h5>
                </div>
                <div className="Card_Description">
                  <p className="Card_Description-Text">
                    Beutiful Clock created with HTML CSS and Vainilla
                    JavaScript,created to practice my CSS and Javascript
                    habilities.
                  </p>
                  <a
                    href="https://reloj-alltimes.netlify.app"
                    target="_blank"
                    className="Link_Proyect"
                  >
                    HERE
                  </a>
                </div>
              </div>
            </div>
            <div className="MoreWorks_Container">
            <NavLink
              to="/Works"
              className="MoreInfo"
              data-aos="fade-down"
              data-aos-duration="5000"
              data-aos-delay="400"
            >
              More
            </NavLink>
          </div>
          </div>
          <div className="Background_Gif_Work"></div>
        </div>
      </div>
    </div>
  );
};

export default WorksHome;
