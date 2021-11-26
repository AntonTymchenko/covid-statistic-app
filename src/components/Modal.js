import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { GiDeathSkull } from "react-icons/gi";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, country }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
        window.removeEventListener("keydown", handleKeyDown);
      }
      return;
    },
    [onClose]
  );

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <h2 className="nameOfCountry">{Country}</h2>
        <ul className="listInfoOfCountry">
          <li className="itemOflistInfo">
            <span>
              <FaHeartbeat className="iconsForModal" />
              TotalConfirmed:
            </span>{" "}
            <span>{TotalConfirmed}</span>
          </li>
          <li className="itemOflistInfo">
            <span>
              <GiDeathSkull className="iconsForModal" />
              TotalDeaths:
            </span>{" "}
            <span>{TotalDeaths}</span>
          </li>
          <li className="itemOflistInfo">
            <span>
              <MdHealthAndSafety className="iconsForModal" />
              TotalRecovered:
            </span>{" "}
            <span>{TotalRecovered}</span>
          </li>
        </ul>
        <div className="divBtn">
          <button
            type="button"
            onClick={handleBackdropClick}
            className="modalButton"
          >
            <span className="OKBtn"> OK</span>
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
