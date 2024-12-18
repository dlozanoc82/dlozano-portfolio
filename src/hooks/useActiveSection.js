import { useEffect, useState } from "react";

export const useActiveSection = () => {
    // Navbar Toggle
    const [toggle, toggleMenu] = useState(false);

    // Active section detection on scroll
    const [activeSection, setActiveSection] = useState("#home");

    const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.scrollY;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveSection(`#${sectionId}`);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Active option nav on click
    const onClickActiveNav = (sectionTitle) => {
        setActiveSection(sectionTitle);
        toggleMenu(false); // Close menu after clicking
    };

    // Toggle menu
    const onToggleMenu = () => {
        toggleMenu(!toggle);
    };

    return{
        onToggleMenu,
        onClickActiveNav,
        activeSection,
        toggle
    }
}