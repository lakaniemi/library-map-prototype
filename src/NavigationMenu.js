import React from "react";

import "./navigation-menu.css";
import { highlightIDs } from "./data";

export const NavigationMenu = ({ onHighlightClick }) => {
  return (
    <div className="menu-overlay">
      <div className="highlight-button-container">
        {highlightIDs.map((id) => (
          <button
            className="highlight-button"
            onClick={onHighlightClick(id)}
            key={id}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};
