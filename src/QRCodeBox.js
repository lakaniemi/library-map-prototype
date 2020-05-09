import React from "react";
import QRCode from "react-qr-code";

import "./qr-code-box.css";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://192.168.0.108:3000"
    : "https://library-map-prototype.netlify.app/";

export const QRCodeBox = ({ highlight }) => {
  const url = highlight ? `${BASE_URL}?highlight=${highlight}` : BASE_URL;

  return (
    <div className="qr-code-box">
      <div className="info-text">
        Scan this QR code to continue navigation on your mobile device!
      </div>
      <QRCode size={256} value={url} />
    </div>
  );
};
