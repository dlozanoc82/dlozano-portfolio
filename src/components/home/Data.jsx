import CV from "../../assets/John-Cv.pdf"
export const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Daniel Lozano</h1>
        <h3 className="home__subtitle">FullStack Developer</h3>
        <p className="home__description">I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
        </p>

        <a href="#portfolio" className="button button--flex btn-portfolio">
            Portfolio
        </a>

        <a download="" href={CV} className="button button--flex">
            Download CV
        </a>
    </div>
  )
}
