import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Map } from "./Map";
import { Menu } from "./Menu";

export const App = () => {
  const [highlight, setHighlight] = useState(null);

  return (
    <TransformWrapper
      wheel={{
        step: 70,
      }}
    >
      {({ resetTransform }) => (
        <>
          <Menu resetTransform={resetTransform} setHighlight={setHighlight} />
          <TransformComponent>
            <Map highlight={highlight} />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
