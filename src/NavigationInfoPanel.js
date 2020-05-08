import React from "react";

import "./navigation-info-panel.css";

import { highlightNames } from "./data";

export const NavigationInfoPanel = ({ highlight }) => {
  return (
    <div className="navigation-info-panel">
      Navigating to{" "}
      <span className="highlight-name">{highlightNames[highlight]}</span>
    </div>
  );
};
