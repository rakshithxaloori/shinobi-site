import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivacyPolicy from "./components/privacy_policy";
import Terms from "./components/terms";
import Delete from "./components/delete";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Shinobi</h2>
      <nav>
        <ul>
          <li>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/legal/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/account/delete">Delete Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
