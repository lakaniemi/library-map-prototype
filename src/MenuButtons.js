import React from "react";

import "./menu-buttons.css";
import QRButton from "./icons/qr-24px.svg";
import NavigateButton from "./icons/navigation-24px.svg";

export const MenuButtons = ({ openNavigation, toggleQRCodeBox }) => {
  // TODO: maybe display QR button only in tablet mode
  return (
    <>
      <div className="menu-buttons-container">
        <button className="icon-button qr" onClick={toggleQRCodeBox}>
          <img src={QRButton} alt="view qr code" />
        </button>

        <button className="icon-button info" onClick={openNavigation}>
          <img src={NavigateButton} alt="navigate to" />
        </button>
      </div>
    </>
  );
};
