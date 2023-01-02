import React from 'react'
import LetsTalkHome from '../Home/LetsTalksHome/LetsTalkHome'
import './Works.css'
import Proyects from './Works/Proyects'
const Works = () => {
    return (
        <div className="Works">
            <div className="Works_NotHome_Container">
                <div className="Works-Title_Container">
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
                <div className="Background_Gif_Works"></div>
            </div>
            <Proyects/>
            <LetsTalkHome/>
        </div>
    )
}

export default Works