import React from "react";

import "./navigation-menu.css";
import CloseButton from "./icons/close-24px.svg";

const CATEGORIES = {
  "Children & Youth": {
    VOX: "VOX Youth Space",
    yesBox: "YesBox",
    kidsPlayground: "Playground",
    kidsLibraryInfo: "Kids library info",
    childrenBooks: "Children's books",
  },
  "Arts, culture & crafts": {
    paja: "Makerspace",
    studio: "Music studio",
    playingRoom: "Music playing room",
    kohtaamo: "Kohtaamo",
    stage: "Stage",
  },
  Healthcare: {
    healthCareCenter: "Healthcare center",
    mentalHealthCenter: "Mental health and addiction services",
    childrenHealthCare: "Child health center",
    mehilainenDental: "Mehiläinen dental care center",
    husLabXRay: "HUSLab X-ray",
  },
  "Public services": {
    kela: "KELA",
    servicePoint: "Espoo city service point",
  },
  "Meeting rooms": {
    meeting_kari: "Kari",
    meeting_aalto: "Aalto",
    meeting_meri: "Meri",
    meeting_luoto: "Luoto",
    meeting_kaisla: "Kaisla",
    meeting_myrsky: "Myrsky",
  },
  Other: {
    info: "Info",
    quietArea: "Quiet area",
    wc: "Toilets",
    escalator: "Escalator",
    elevators: "Elevators",
    popup: "Popup",
  },
};

const buttonClassNames = {
  "Children & Youth": "children-and-youth",
  "Arts, culture & crafts": "arts-and-crafts",
  Healthcare: "healthcare",
  "Public services": "public-services",
  "Meeting rooms": "meeting-rooms",
  Other: "other",
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
            <div className="category-buttons">
              {Object.keys(CATEGORIES[category]).map((highlightID) => (
                <button
                  key={`highlight-${highlightID}`}
                  className={buttonClassNames[category]}
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
