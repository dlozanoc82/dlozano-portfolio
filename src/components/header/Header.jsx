import { useState } from "react";
import "./header.css";
import { useScroll } from "../../hooks/useScroll";

export const Header = () => {

    const {isScrolled} = useScroll(80);

    const [toggle, toggleMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const onToggleMenu = () => {
        toggleMenu(!toggle)
    }

    const onClickActiveNav = (sectionTitle) =>{
        setActiveNav(sectionTitle)
    }


  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`}>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Dcoder</a>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"} >
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a 
                            href="#home"
                            className={ activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            onClick={() => onClickActiveNav("#home")}
                        >
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                            href="#about"
                            className={ activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            onClick={() => onClickActiveNav("#about")}
                        >
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a
                            href="#skills"
                            className={ activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                            onClick={() => onClickActiveNav("#skills")}
                        >
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                            href="#portfolio"
                            className={ activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
                            onClick={() => onClickActiveNav("#portfolio")}
                        >
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                            href="#contact" 
                            className={ activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                            onClick={() => onClickActiveNav("#contact")}
                        >
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>

                </ul>

                <i className="uil uil-times nav__close" onClick={onToggleMenu}></i>

            </div>

            <div
                className="nav__toggle"
                onClick={onToggleMenu}
            >
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

