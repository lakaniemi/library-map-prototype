import React, { useState } from "react";
import { TransformComponent } from "react-zoom-pan-pinch";

import { MenuButtons } from "./MenuButtons";
import { NavigationMenu } from "./NavigationMenu";
import { Map } from "./Map";

export const Content = ({ resetTransform }) => {
  const [highlight, setHighlight] = useState(null);
  const [navigationVisible, setNavigationVisible] = useState(false);

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
      <MenuButtons openNavigation={() => setNavigationVisible(true)} />
      {navigationVisible && (
        <NavigationMenu onHighlightClick={onHighlightClick} />
      )}
      <TransformComponent>
        <Map highlight={highlight} />
      </TransformComponent>
    </>
  );
};
