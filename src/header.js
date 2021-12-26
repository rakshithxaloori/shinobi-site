import React from "react";

import "./header.css";

console.log("HEADER", process.env.PUBLIC_URL);

const Header = () => (
  <div className="Header">
    <a className="Header-link" href="/">
      <img
        src={process.env.PUBLIC_URL + "logo512.png"}
        height={40}
        className="Header-logo"
        alt="Shinobi"
      />
      <p className="Header-text">Shinobi</p>
    </a>
    <a
      className="Header-upload-redirect"
      rel="noopener noreferrer"
      target="_blank"
      href="https://upload.shinobi.cc"
    >
      <ion-icon name="cloud-upload-outline" />
      <p className="Upload-text">Upload a clip</p>
    </a>
  </div>
);

export default Header;
