import React from "react";

import "./navigation-menu.css";
import CloseButton from "./icons/close-24px.svg";
import { highlightIDs } from "./data";

// "meeting_kari",
// "meeting_b31",
// "meeting_aalto",
// "meeting_meri",
// "meeting_luoto",
// "meeting_kaisla",
// "meeting_myrsky",

export const NavigationMenu = ({ onHighlightClick, onClose }) => {
  return (
    <div className="menu-overlay">
      <button className="close-button" onClick={onClose}>
        <img src={CloseButton} alt="Close" />
      </button>
      <div className="navigation-menu-content">
        <div className="category">
          <div className="title">Meeting rooms</div>
          <div className="buttons">
            <button onClick={onHighlightClick("meeting_kari")}>Kari</button>
            <button onClick={onHighlightClick("meeting_aalto")}>Aalto</button>
            <button onClick={onHighlightClick("meeting_meri")}>Meri</button>
            <button onClick={onHighlightClick("meeting_luoto")}>Luoto</button>
            <button onClick={onHighlightClick("meeting_kaisla")}>Kaisla</button>
            <button onClick={onHighlightClick("meeting_myrsky")}>Myrsky</button>
            <button onClick={onHighlightClick("meeting_b31")}>B31</button>
          </div>
        </div>
        <div className="category">
          <div className="title">Healthcare</div>
          <div className="buttons">
            <button onClick={onHighlightClick("healthCareCenter")}>
              Healthcare center
            </button>
            <button onClick={onHighlightClick("mentalHealthCenter")}>
              Mental health and addiction services
            </button>
            <button onClick={onHighlightClick("childrenHealthCare")}>
              Child health center
            </button>
            <button onClick={onHighlightClick("mehilainenDental")}>
              Mehiläinen dental center
            </button>
            <button onClick={onHighlightClick("husLabXRay")}>
              HUSLab X-ray
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
