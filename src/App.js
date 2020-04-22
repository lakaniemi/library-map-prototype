import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./App.css";
import { Map } from "./Map";

export const App = () => {
  return (
    <TransformWrapper
      wheel={{
        step: 70,
      }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div>Controls here</div>
          <TransformComponent>
            <Map />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
