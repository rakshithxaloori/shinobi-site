import React, { useState, useEffect } from "react";

import "./footer.css";
import { getWindowDimensions } from "./utils/window";

const styles = {
  rowGrid: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  columnGrid: { display: "flex", flexDirection: "column" },
  column: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 40,
    textAlign: "left",
  },
  link: {},
};

const Footer = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        width: "100%",
        flexWrap: "wrap",
        backgroundColor: "black",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={
            windowDimensions.width <= 768 ? styles.columnGrid : styles.rowGrid
          }
        >
          <div style={styles.column}>
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
          <div style={styles.column}>
            <a
              className="Footer-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.reddit.com/r/ShinobiApp/"
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
          <div style={styles.column}>
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
};

export default Footer;
