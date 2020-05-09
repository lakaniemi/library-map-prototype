import React from "react";

import "./navigation-info-panel.css";
import CloseButton from "./icons/close-24px-black.svg";

import { highlightNames } from "./data";

export const NavigationInfoPanel = ({ highlight, resetHighlight }) => {
  return (
    <div className="navigation-info-panel-container">
      <div className="navigation-info-panel">
        <button className="stop-navigation-button" onClick={resetHighlight}>
          <img src={CloseButton} alt="Close" />
        </button>
        <div>
          Navigating to{" "}
          <span className="highlight-name">{highlightNames[highlight]}</span>
        </div>
      </div>
    </div>
  );
};
