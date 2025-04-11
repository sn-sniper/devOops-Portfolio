import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Figma } from "grommet-icons";
import { Template } from "grommet-icons";
import { GooglePlay } from "grommet-icons";
import { Desktop } from "grommet-icons";
import { Help } from "grommet-icons";
import "./SelectDropdown.css";
import PropTypes from "prop-types";

const options = [
  { label: "UI UX", value: "uiux", icon: <Figma color="plain" /> },
  { label: "Website", value: "website", icon: <Template color="#636edf" /> },
  { label: "Mobile App", value: "mobile", icon: <GooglePlay color="plain" /> },
  { label: "Software", value: "software", icon: <Desktop color="#1F7D53" /> },
  { label: "Other", value: "other", icon: <Help color="red" /> },
];

export default function SelectDropdown({ Data, setData }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    // setSelected(option);
    setData((prev) => ({
      ...prev,
      selectedService: option.label,
    }));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown min-w-[170px]" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{Data ? Data : "Select a service"}</span>
        <FaChevronDown className={`chevron ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              <span className="icon">{option.icon}</span>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SelectDropdown.propTypes = {
  Data: PropTypes.string,
  setData: PropTypes.func.isRequired,
};
