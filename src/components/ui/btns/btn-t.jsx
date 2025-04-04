// import { useState } from "react";
import "./btn.css";
import { FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";
export default function Btnt({ bg, border, text, action }) {
  //   const [bgColor, setBgColor] = useState(bg);
  //   const [Border, setBorder] = useState(border);
  //   const [Text, setText] = useState(text);
  return (
    <button
      className={`btn-t ${bg ? "bg-w" : ""} ${border ? `border-w` : ""}`}
      onClick={action}
    >
      <span className="Arrow">
        <FaArrowRight className="arrow" />
      </span>
      <p className={bg ? "text-black btn-text" : "btn-text"}>{text}</p>
    </button>
  );
}

Btnt.propTypes = {
  bg: PropTypes.bool,
  border: PropTypes.bool,
  text: PropTypes.string,
  action: PropTypes.func,
};
