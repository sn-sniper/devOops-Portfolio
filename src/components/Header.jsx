import Navbar from "@components/Navbar";
import { assets } from "@assets/assets";
import "@styles/Header.css";
import Subheader from "./ui/Subhead/Subheader";
import HOverlay from "@components/ui/Header-Overlay/HOverlay";
import Btnt from "./ui/btns/btn-t";
export default function Header() {
  return (
    <div className="header-container">
      <HOverlay />
      <div className="header-content">
        <Navbar />
        <div className="header-about">
          <section className="img-sec">
            <img src={assets.header_img} alt="header_img" />
          </section>
          <section className="text-sec">
            <Subheader text="Trusted Partner" bg={true} />
            <h1>
              Code. Create. <span className="text-indigo-500">Elevate.</span>
              <br />
              Secure Your Vision By
              <br />
              Our <span className="text-indigo-700">Algorithms.</span>
            </h1>
            <h2>Turning Concepts into Cross-Platform Experiences</h2>
            <Btnt text="view our work" bg={true} border={false} />
          </section>
        </div>
      </div>
    </div>
  );
}
