import "./portfolio.css"
import { Projects } from "./Projects"

export const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent projects</span>

        <Projects />
    </section>
  )
}
