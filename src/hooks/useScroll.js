import { useEffect, useState } from "react";

export const useScroll = (scrollData) => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Manejar el evento de scroll
    const handleScroll = () => {
        if (window.scrollY >= scrollData) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])

    const onClickScrollUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return{
        isScrolled,
        onClickScrollUp
    }


}