import React from 'react'
import './Information.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Information = () => {
    AOS.init();
    return (
        <div className="Information">
            <div className="Information_Container">
                <div className="AboutMe-Information_Container">
                    <p className="AboutMe_PersonalInformation"
                        data-aos="fade-down-right"
                        data-aos-duration="1500"
                        data-aos-delay="600">
                        I am a software engineer working out of Bogota, Colombia, and I am
                        constantly looking for ground-breaking solutions to issues that
                        arise in daily life. In my work, I spend most of my time coming up
                        with innovative solutions to development problems. <br /> <br />{" "}
                        I've been a part of this industry for over one year as an
                        freelancer developer and within that year, I've honed my analytic
                        and collaboration skills which makes working with a team easier.{" "}
                        <br /> <br />
                        Even though I stumbled upon code by accident, it's something I've
                        come to really like. But like they say, good things come to us
                        without plan, right?. <br />
                        <br /> I especially enjoy watching code bring to life an entirely
                        new beautiful thing, it's magical. For me, each project I have the
                        privilege to work on is a new opportunity to learn new things, meet
                        people with ideas that are different from mine and discover things about
                        myself I never knew were beneath the layers of all of me. I enjoy
                        watching anime, cartoons and I am very into the videogames. I listen
                        to lots of music, Eminem and Kendrick Lamar are probably my two
                        favourite artists (For Now).And let's not forget the guys of AJR,
                        they're amazing too.
                    </p>
                    <br />
                    <br />
                    <div className='FrontEndTools_Info_Container'>
                        <p className="FrontEndTools_Info"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            data-aos-delay="900">
                            <span> Frontend Tools:</span> <br /> JavaScript(ES6+), HTML5,
                            React.js, Next.js, Vite.js, Redux, Redux Toolkit,React Storybook,
                            NPM, React Testing Library, Node.js/Express, Bootstrap,
                            Git/Gitlab/Github/BitBucket.
                            <br />
                            <span> UI Libraries:</span> <br /> CSS3/SCSS/SASS, Framer Motion,
                            GSAP, Styled Components, Bootstrap, Tailwind CSS, Material UI,
                            Chakra UI, React Storybook, Git.
                        </p>
                        <br />
                        <br />
                        <p className="UiLibraries_Info"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            data-aos-delay="800">
                            <span>Work Experience:</span> <br />
                            1. Grea Designs: Marketing Agency located in Argentina since January 2023 - present <br />
                            2. Freelancer: Worked as a front end developer making web pages for small bussines since 2018 - 2022
                        </p>
                    </div>

                </div>
                <div className="Background_Gif_AboutMe_Information"></div>
            </div>
        </div>
    )
}

export default Information