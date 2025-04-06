import "./HOverlay.css";
import { assets } from "@assets/assets";
function HOverlay() {
  return (
    <div className="overlay-img">
      <div className="overlay-wrapper">
        <img src={assets.h5_pattern} alt="pattern" />
      </div>
    </div>
  )
}

export default HOverlay