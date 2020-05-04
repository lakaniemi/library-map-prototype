import React from "react";
import { TransformWrapper } from "react-zoom-pan-pinch";
import { BrowserRouter } from "react-router-dom";

import { Content } from "./Content";

export const App = () => {
  return (
    <BrowserRouter>
      <TransformWrapper
        wheel={{
          step: 70,
        }}
      >
        {({ resetTransform }) => <Content resetTransform={resetTransform} />}
      </TransformWrapper>
    </BrowserRouter>
  );
};
