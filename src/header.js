import React from "react";

import Logo from "./logo512.png";

import "./header.css";

const Header = () => (
  <div className="Header">
    <a className="Header-link" href="/">
      <img src={Logo} height={60} className="Header-logo" alt="Play Store" />
      <p className="Header-text">Shinobi</p>
    </a>
  </div>
);

export default Header;
