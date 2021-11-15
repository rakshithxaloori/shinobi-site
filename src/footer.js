import React from "react";
import { Link } from "react-router-dom";
import PlayStore from "./components/play_store";

import "./footer.css";

const Footer = () => (
  <div className="Footer">
    <div className="Footer-sections">
      <nav>
        <ul>
          <li className="Footer-item">
            <Link to="/legal/privacy-policy" className="Footer-link">
              Privacy Policy
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/legal/terms" className="Footer-link">
              Terms & Conditions
            </Link>
          </li>
          <li className="Footer-item">
            <Link to="/account/delete" className="Footer-link">
              Delete Account
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Footer-store-links">
        <PlayStore />
      </div>
    </div>
    <p className="Disclaimer">
      Disclaimer: Shinobi isn't endorsed by Riot Games and doesn't reflect the
      views or opinions of Riot Games or anyone officially involved in producing
      or managing Riot Games properties. Riot Games, and all associated
      properties are trademarks or registered trademarks of Riot Games, Inc.
    </p>
  </div>
);

export default Footer;
