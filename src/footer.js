import React from "react";

import "./footer.css";

const Footer = () => (
  <div className="Footer">
    <nav className="Footer-container">
      <div className="Footer-row">
        <div className="Footer-column">
          <a
            className="Footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="/legal/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="Footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="/legal/terms"
          >
            Terms & Conditions
          </a>
          <a
            className="Footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="/account/delete"
          >
            Delete Account
          </a>
        </div>
        <div className="Footer-column">
          <a
            className="Footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.reddit.com/r/shinobi_app/"
          >
            <ion-icon name="logo-reddit" />
            <span style={{ marginLeft: "10px" }}>Reddit</span>
          </a>
          <a
            className="Footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href={process.env.REACT_APP_DISCORD_INVITE_LINK}
          >
            <ion-icon name="logo-discord" />
            <span style={{ marginLeft: "10px" }}>Discord</span>
          </a>
        </div>
        <div className="Footer-column">
          <a href="https://play.google.com/store/apps/details?id=cc.shinobi.android">
            <img
              src={process.env.PUBLIC_URL + "/PlayStore.png"}
              height={77}
              alt="Play Store"
            />
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Footer;
