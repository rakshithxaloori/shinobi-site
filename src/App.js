import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

import "./App.css";

import PrivacyPolicy from "./components/privacy_policy";
import Terms from "./components/terms";
import Delete from "./components/delete";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Switch>
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

function Home() {
  return (
    <div className="Home">
      <div className="Non-Screenhots">
        <div>
          <p className="Title">welcome to shinobi!</p>
          <p className="Subtitle">
            Upload your favorite moments from video games!
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="Subtitle">
              You can upload a clip b/w 5 and 60 seconds upto &nbsp;
            </p>
            <p className="Subtitle" style={{ textDecoration: "underline" }}>
              500 MB!
            </p>
          </div>
        </div>
        <a href="https://play.google.com/store/apps/details?id=cc.shinobi.android">
          <img
            src={process.env.PUBLIC_URL + "/PlayStore.png"}
            height={77}
            className="Play-store-button"
            alt="Shinobi on Play Store"
          />
        </a>
      </div>
      <div className="Screenshots">
        <img
          src={process.env.PUBLIC_URL + "/screenshots/ss1.jpg"}
          height={550}
          className="Screenshot"
          alt="Feed Screen"
        />
      </div>
    </div>
  );
}

export default App;
