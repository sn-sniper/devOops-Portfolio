import PropTypes from "prop-types";
import "./AboutBox.css";

export default function AboutBox({ data }) {
  return (
    <div className="AboutBox-container">
      <div className="AboutBox-top">
        <h1 className="subpixel-antialiased font-bold text-8xl">
          {data.Number}
          <sup className="text-6xl">{data.Sign}</sup>
        </h1>
        <h2 className="text-3xl subpixel-antialiased font-bold">{data.h2}</h2>
      </div>
      <div className="AboutBox-bottom">
        <p className="text-xl text-gray-500">
          {/* {data.Number} */}
          {/* {data.Sign} */}
          {data.p}
        </p>
      </div>
    </div>
  );
}

AboutBox.propTypes = {
  data: PropTypes.shape({
    Number: PropTypes.string.isRequired,
    Sign: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
