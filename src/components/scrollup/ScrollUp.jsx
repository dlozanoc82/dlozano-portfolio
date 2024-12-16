import { useEffect, useState } from "react"
import "./scrollup.css"


export const ScrollUp = () => {

    const [showScroll, setShowScroll] = useState(false);

    //Manage event scroll
    const handleScroll = () => {
        window.scrollY >= 560 ? setShowScroll(true) : setShowScroll(false);
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const onClickScrollUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

  return (
    <div
        className={`scrollup ${showScroll ? "show-scroll" : ""} `}
        onClick={onClickScrollUp}
    >
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </div>
  )
}
