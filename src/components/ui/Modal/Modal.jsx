import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

import "./Modal.css";

export default function Modal({ isOpen, onClose, header, children }) {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose(); // Call the parent close function
    }, 500); // Match the duration of the fadeOut animation in CSS
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-Container ${isClosing ? "fade-out" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${isClosing ? "fade-out" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h1>{header}</h1>
          <button type="button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
