import React from "react";
import { MapInteractionCSS } from "react-map-interaction";

import "./App.css";
import { Map } from "./Map";

export const App = () => {
  return (
    <div className="App">
      <MapInteractionCSS>
        <Map />
      </MapInteractionCSS>
    </div>
  );
};
