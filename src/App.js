import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

import "./App.css";

import PrivacyPolicy from "./components/privacy_policy";
import Terms from "./components/terms";
import Delete from "./components/delete";
import Clip from "./components/clip";
import { darkTheme } from "./utils/theme";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: darkTheme.background }}>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Switch>
            <Route path="/clip/:post_id">
              <Clip />
            </Route>
            <Route path="/legal/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/legal/terms">
              <Terms />
            </Route>
            <Route path="/account/delete">
              <Delete />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  subtitle: { fontSize: 20, marginTop: 10 },
};

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        color: darkTheme.on_background,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ paddingLeft: 10 }}>
          <p style={{ fontSize: 30, fontWeight: "bold" }}>
            welcome to shinobi!
          </p>
          <p style={styles.subtitle}>One place to share gaming clips</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={styles.subtitle}>60 seconds clip upto 500 MB!</p>
          </div>
        </div>
        <a
          title="Shinobi on Play Store"
          rel="noopener noreferrer"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=cc.shinobi.android"
        >
          <img
            src={process.env.PUBLIC_URL + "/PlayStore.png"}
            height={77}
            alt="Shinobi on Play Store"
          />
        </a>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <img
          src={process.env.PUBLIC_URL + "/screenshots/ss1.png"}
          height={550}
          alt="Home"
        />
      </div>
    </div>
  );
}

export default App;
