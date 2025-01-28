import "./HOverlay.css"
import h5_pattern from "@assets/h5_pattern.png"
function HOverlay() {
  return (
    <div className="overlay-img">
      <div className="overlay-wrapper">
        <img src={h5_pattern} alt="pattern" />
      </div>
    </div>
  )
}

export default HOverlay