import "./about.css"
import AboutImg from "../../assets/about.jpeg"
// import { Info } from "./Info"
import { portfolioData } from "../../data";

export const About = () => {

  const { about } = portfolioData[0]; 

  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                {/* <Info /> */}
                <p className="about__description">
                  {about.content}
                </p>

                <a href="#contact" className="button button--flex btn-contact">
                    Hire Me <i className="uil uil-message btn-contact-icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

