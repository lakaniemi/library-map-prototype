import React from "react";

import "./navigation-menu.css";
import CloseButton from "./icons/close-24px.svg";

const CATEGORIES = {
  Healthcare: {
    healthCareCenter: "Healthcare center",
    mentalHealthCenter: "Mental health and addiction services",
    childrenHealthCare: "Child health center",
    mehilainenDental: "Mehiläinen dental center",
    husLabXRay: "HUSLab X-ray",
  },
  "Meeting rooms": {
    meeting_kari: "Kari",
    meeting_aalto: "Aalto",
    meeting_meri: "Meri",
    meeting_luoto: "Luoto",
    meeting_kaisla: "Kaisla",
    meeting_myrsky: "Myrsky",
    meeting_b31: "B31",
  },
  Other: {
    wc: "wc",
    quietArea: "quietArea",
    servicePoint: "servicePoint",
    kela: "kela",
    popup: "popup",
    kohtaamo: "kohtaamo",
    paja: "paja",
    stage: "stage",
    studio: "studio",
    playingRoom: "playingRoom",
    music: "music",
    childrenBooks: "childrenBooks",
    kidsLibraryInfo: "kidsLibraryInfo",
    info: "info",
    kidsPlayground: "kidsPlayground",
    yesBox: "yesBox",
    VOX: "VOX",
    elevators: "elevators",
  },
};

export const NavigationMenu = ({ onHighlightClick, onClose }) => {
  return (
    <div className="menu-overlay">
      <button className="close-button" onClick={onClose}>
        <img src={CloseButton} alt="Close" />
      </button>
      <div className="navigation-menu-content">
        {Object.keys(CATEGORIES).map((category) => (
          <div className="category" key={`category-${category}`}>
            <div className="title">{category}</div>
            <div className="buttons">
              {Object.keys(CATEGORIES[category]).map((highlightID) => (
                <button
                  key={`highlight-${highlightID}`}
                  onClick={onHighlightClick(highlightID)}
                >
                  {CATEGORIES[category][highlightID]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
