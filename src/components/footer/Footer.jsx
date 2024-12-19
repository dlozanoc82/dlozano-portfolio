import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Dcoder</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

            </ul>

            <div className="footer-social-icons">
                <div className="icon"><i className="icon-size uil uil-instagram"></i></div>
                <div className="icon"><i className="icon-size uil uil-linkedin-alt"></i></div>
                <div className="icon"><i className="icon-size uil uil-dribbble"></i></div>
                <div className="icon"><i className="icon-size uil uil-github-alt"></i></div>
            </div>

        </div>
    </footer>
  )
}
