import "@styles/Services.css";
import { assets, svg } from "@assets/assets";
import { FaArrowRight } from "react-icons/fa6";
export default function Services() {
    return (
        <div className='Services-Container'>
            <div className="service-item">
                <div className="service-thumb">
                    <img className="thumb-img" src={assets.s1_img} alt="thumb" />
                </div>
                <div className="service-content">
                    <div className="service-btn">
                        <a href="/">
                            <FaArrowRight className="arrow" />
                            <img src={svg.uxui} alt="svg" />
                        </a>
                    </div>
                    <div className="service-title">
                            <h1 className="marquee marq-1">UX/UI Design</h1>
                            <h1 className="marquee marq-2">UX/UI Design</h1>
                            <h1 className="marquee marq-3">UX/UI Design</h1>
                    </div>
                    <div className="service-subtitle">UX/UI Design</div>
                </div>
            </div>
        </div>
    )
}
