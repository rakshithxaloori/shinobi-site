import React from "react";

import "./header.css";

const Header = () => (
  <div className="Header">
    <a className="Header-link" href="/">
      <img
        src={process.env.PUBLIC_URL + "/logo512.png"}
        height={40}
        className="Header-logo"
        alt="Shinobi"
      />
      <p style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
        Shinobi
      </p>
    </a>
    <a
      className="Header-upload-redirect"
      rel="noopener noreferrer"
      target="_blank"
      href="https://upload.shinobi.cc"
      title="Upload a clip"
    >
      <ion-icon name="cloud-upload-outline" />
    </a>
  </div>
);

export default Header;
