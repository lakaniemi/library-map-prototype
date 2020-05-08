import React from "react";

import "./navigation-menu.css";

import CloseButton from "./icons/close-24px.svg";
import { highlightNames } from "./data";

const CATEGORIES = {
  "Children & Youth": [
    "VOX",
    "yesBox",
    "kidsPlayground",
    "kidsLibraryInfo",
    "childrenBooks",
  ],
  "Arts, culture & crafts": [
    "paja",
    "studio",
    "playingRoom",
    "kohtaamo",
    "stage",
  ],
  Healthcare: [
    "healthCareCenter",
    "mentalHealthCenter",
    "childrenHealthCare",
    "mehilainenDental",
    "husLabXRay",
  ],
  "Public services": ["kela", "servicePoint"],
  "Meeting rooms": [
    "meeting_kari",
    "meeting_aalto",
    "meeting_meri",
    "meeting_luoto",
    "meeting_kaisla",
    "meeting_myrsky",
  ],
  Other: ["info", "quietArea", "wc", "escalator", "elevators", "popup"],
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
              {CATEGORIES[category].map((highlightID) => (
                <button
                  key={`highlight-${highlightID}`}
                  className={buttonClassNames[category]}
                  onClick={onHighlightClick(highlightID)}
                >
                  {highlightNames[highlightID]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
