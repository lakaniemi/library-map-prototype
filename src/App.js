import React from "react";
import { TransformWrapper } from "react-zoom-pan-pinch";

import { Content } from "./Content";

export const App = () => {
  return (
    <TransformWrapper
      wheel={{
        step: 70,
      }}
    >
      {({ resetTransform }) => <Content resetTransform={resetTransform} />}
    </TransformWrapper>
  );
};
