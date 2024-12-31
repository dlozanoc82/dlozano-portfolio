import CV from "../../assets/John-Cv.pdf"
import { portfolioData } from "../../data"

export const Data = () => {

  const { home, about } = portfolioData[0]; 

  return (
    <div className="home__data">
        <h1 className="home__title">Daniel Lozano</h1>
        <h3 className="home__subtitle">FullStack Developer</h3>
        <p className="home__description"> {home.description} </p>

        <a href="#portfolio" className="button button--flex btn-portfolio">
            Portfolio <i className='bx bxs-briefcase-alt-2 button-portfolio-icon'></i>
        </a>

        <a download="" href={CV} className="button button--flex btn-cv">
            Download CV  <i className='bx bx-file button-cv-icon'></i>
        </a>
    </div>
  )
}
