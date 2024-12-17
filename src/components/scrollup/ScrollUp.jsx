import "./scrollup.css"
import { useScroll } from "../../hooks/useScroll"


export const ScrollUp = () => {

    const {isScrolled, onClickScrollUp} = useScroll(560);

  return (
    <div
        className={`scrollup ${isScrolled ? "show-scroll" : ""} `}
        onClick={onClickScrollUp}
    >
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </div>
  )
}
