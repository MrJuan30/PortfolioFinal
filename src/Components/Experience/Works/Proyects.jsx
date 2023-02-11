import React from 'react'
import './Proyects.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Pokedex from "../../../assets/Pokedex.jpeg";
import Rick from "../../../assets/RickAndMorty.jpeg";
import silocloms from "../../../assets/SiloclomsCapture.jpeg";
import Weather from "../../../assets/WeatherAoo.jpeg";
import Gym from "../../../assets/GymPage.jpeg";
import EcommercePhoto from "../../../assets/EcommercePhotho.jpeg";

const Proyects = () => {
    AOS.init();
    return (
        <div className="Proyects">
            <div className="Proyects_Container">
                <div className="Proyects-Title_Container">
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
                                <a href="https://siloclomsprueba.netlify.app/#/" target="_blank">
                                    <img src={silocloms} alt="" className="Card_Image" />
                                </a>
                            </div>
                            <div className="Card_Information">
                                <div className="Card_Title">
                                    <h5 className="Card_Title-text">Silocloms</h5>
                                </div>
                                <div className="Card_Description">
                                    <p className="Card_Description-Text">
                                        Beautiful website created for Silocloms, a leading grain import and export company in Argentina, Created with REACT JS, Vainilla Css, Tailwind and JavaScript.
                                    </p>
                                    <a
                                        href="https://siloclomsprueba.netlify.app/#/"
                                        target="_blank"
                                        className="Link_Proyect"
                                    >
                                        HERE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Works_Descriptions">
                        <div
                            className="Card_Container"
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            <div className="Card_Header">
                                <a href="https://weatherappbyjuan.netlify.app" target="_blank">
                                    <img src={Weather} alt="" className="Card_Image" />
                                </a>
                            </div>
                            <div className="Card_Information">
                                <div className="Card_Title">
                                    <h5 className="Card_Title-text">Weather</h5>
                                </div>
                                <div className="Card_Description">
                                    <p className="Card_Description-Text">
                                        Weather App proyect created with React JS, using axios to make
                                        the petition to the API, using CSS and JS to make the
                                        animations and styles.
                                    </p>
                                    <a
                                        href="https://weatherappbyjuan.netlify.app"
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
                                    href="https://ecommercefakestore.netlify.app"
                                    target="_blank"
                                >
                                    <img src={EcommercePhoto} alt="Ecommerce Photo" className="Card_Image" />
                                </a>
                            </div>
                            <div className="Card_Information">
                                <div className="Card_Title">
                                    <h5 className="Card_Title-text">Ecommerce</h5>
                                </div>
                                <div className="Card_Description">
                                    <p className="Card_Description-Text">
                                        Ecommerce proyect created with React JS,
                                        using axios to make the petition to the API, using CSS to make the styles, using also the context API to the cart.
                                    </p>
                                    <a
                                        href="https://ecommercefakestore.netlify.app"
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
                                <a href="https://gympage.netlify.app" target="_blank">
                                    <img src={Gym} alt="" className="Card_Image" />
                                </a>
                            </div>
                            <div className="Card_Information">
                                <div className="Card_Title">
                                    <h5 className="Card_Title-text">Gym Page</h5>
                                </div>
                                <div className="Card_Description">
                                    <p className="Card_Description-Text">
                                        Gym Landing Page created with HTML CSS and Vainilla
                                        JavaScript,created to practice my CSS and Javascript
                                        habilities.
                                    </p>
                                    <a
                                        href="https://gympage.netlify.app"
                                        target="_blank"
                                        className="Link_Proyect"
                                    >
                                        HERE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Background_Gif_Proyects"></div>
            </div>
        </div>
    )
}

export default Proyects