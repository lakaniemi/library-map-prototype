import React, { useState, useEffect } from "react";
import { TransformComponent } from "react-zoom-pan-pinch";
import { useLocation } from "react-router-dom";

import { MenuButtons } from "./MenuButtons";
import { NavigationMenu } from "./NavigationMenu";
import { Map } from "./Map";
import { QRCodeBox } from "./QRCodeBox";
import { NavigationInfoPanel } from "./NavigationInfoPanel";

export const Content = ({ resetTransform }) => {
  const [highlight, setHighlight] = useState(null);
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [qrCodeVisible, setQRCodeVisible] = useState(false);

  const location = useLocation();

  // If we detect a query paremeter ?highlight=something, let's set the highlight.
  // This is mainly used for the QR code reading to keep highlight between devices.
  useEffect(() => {
    const highlightValue = new URLSearchParams(location.search).get(
      "highlight"
    );
    if (highlightValue && highlightValue !== "null") {
      setHighlight(highlightValue);
    }
  }, [location.search]);

  const onHighlightClick = (id) => () => {
    setNavigationVisible(false);
    resetTransform();
    // resetTransform does not like if this happens immidiately,
    // as it seems to stop it's animation. 200 is the animation
    // duration, so let's wait for that.
    setTimeout(() => setHighlight(id), 200);
  };

  return (
    <>
      {highlight && (
        <NavigationInfoPanel
          highlight={highlight}
          resetHighlight={() => setHighlight(undefined)}
        />
      )}
      <MenuButtons
        openNavigation={() => setNavigationVisible(true)}
        toggleQRCodeBox={() => setQRCodeVisible((oldValue) => !oldValue)}
      />
      {navigationVisible && (
        <NavigationMenu
          onHighlightClick={onHighlightClick}
          onClose={() => setNavigationVisible(false)}
        />
      )}
      {qrCodeVisible && <QRCodeBox highlight={highlight} />}
      <TransformComponent>
        <Map highlight={highlight} setHighlight={setHighlight} />
      </TransformComponent>
    </>
  );
};
