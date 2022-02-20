import React from "react";
import Helmet from "react-helmet";

import MailTo from "./mailto";

import "../App.css";

const Delete = () => (
  <div className="terms">
    <Helmet>
      <title>Delete Account | Shinobi</title>
    </Helmet>
    <div className="Text-body">
      <strong>Delete Account</strong>{" "}
      <p>
        To delete an account send an email to <MailTo />
      </p>{" "}
      <p>
        If you are not sure, then please don't break up with us{" "}
        <span role="img" aria-label="pleading">
          🥺
        </span>
      </p>
      <p>
        Note that deleting an account is permanent and irreversible. (Just like
        breaking up. SAY WHAT{" "}
        <span role="img" aria-label="pleading">
          ❤
        </span>
        )
      </p>
    </div>
  </div>
);

export default Delete;
