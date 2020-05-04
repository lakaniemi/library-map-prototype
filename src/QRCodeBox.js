import React from "react";
import QRCode from "react-qr-code";

import "./qr-code-box.css";

const BASE_URL = "https://library-map-prototype.netlify.app/";

export const QRCodeBox = () => {
  // TODO: make it so that the QR code will lead to the page with current
  // highlight available, using react-router
  const url = `${BASE_URL}`;

  return (
    <div className="qr-code-box">
      <div className="info-text">
        Scan this QR code to continue navigation on your mobile device!
      </div>
      <QRCode size={256} value={url} />
    </div>
  );
};
