import React, { useState } from "react";

import "./menu.css";
import { highlightIDs } from "./data";

export const Menu = ({ resetTransform, setHighlight }) => {
  const [visible, setVisible] = useState(false);

  const onHighlightClick = (id) => () => {
    setVisible(false);
    resetTransform();
    // resetTransform does not like if this happens immidiately,
    // as it seems to stop it's animation. 200 is the animation
    // duration, so let's wait for that.
    setTimeout(() => setHighlight(id), 200);
  };

  // TODO: overlay on liian iso, venyttää sivua.

  return (
    <>
      <div className="top-right-menu">
        <button onClick={() => setVisible((oldValue) => !oldValue)}>
          {!visible ? "Navigate to..." : "Close"}
        </button>
      </div>
      {visible && (
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
      )}
    </>
  );
};
