import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

import PlayStore from "./components/play_store";
import "./App.css";

import PrivacyPolicy from "./components/privacy_policy";
import Terms from "./components/terms";
import Delete from "./components/delete";

import FeedScreenshot from "./screenshots/feed.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <body className="App-body">
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
        </body>
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
          <p className="Title">Welcome to Shinobi!</p>
          <p className="Subtitle">
            League of Legends' match history and champion masteries!
          </p>
          <p className="Subtitle">
            Stalk, follow, chat and share matches with your friends!
          </p>
        </div>
        <div className="Store-icons">
          <PlayStore />
        </div>
      </div>
      <div className="Screenshots">
        <img
          src={FeedScreenshot}
          height={550}
          className="Header-logo"
          alt="Feed Screen"
        />
      </div>
    </div>
  );
}

export default App;
