import { assets, svg } from "@assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";
import PropTypes from "prop-types";

export default function ServiceItem({ item }) {
  const controls = useAnimation();
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="service-item"
      // key={index}
      onMouseEnter={() => {
        // setIsHovered(true);
        controls.set({ x: 0 });
        controls.start({
          x: "-50%",
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        });
      }}
      onMouseLeave={() => {
        // setIsHovered(false);
        controls.stop();
      }}
    >
      <div className="service-thumb">
        <img className="thumb-img" src={assets[item.thumb]} alt="thumb" />
      </div>
      <div className="service-content">
        <div className="service-btn">
          <a href="/">
            <FaArrowRight className="arrow" />
            <img src={svg[item.svg]} alt="svg" />
          </a>
        </div>
        <div className="service-title">
          <motion.div className="marquee" animate={controls}>
            {[...Array(4)].map((_, i) => (
              <h1 key={i}>{item.service}</h1>
            ))}
          </motion.div>
        </div>
        <div className="service-subtitle">{item.service}</div>
      </div>
    </div>
    // <div className="Services-Container">
    //   {data.services.map((item, index) => {
    //     return (

    //     );
    //   })}
    // </div>
  );
}

ServiceItem.propTypes = {
  item: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  }).isRequired,
};
