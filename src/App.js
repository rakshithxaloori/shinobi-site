import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivacyPolicy from "./components/privacy_policy";
import Terms from "./components/terms";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/legal/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/legal/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/legal/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/legal/terms">
            <Terms />
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
  return <h2>Home</h2>;
}

export default App;
