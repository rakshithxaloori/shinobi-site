import React from "react";

import "../App.css";

const Delete = () => (
  <div className="terms">
    <body className="Text-body">
      <strong>Delete Account</strong>{" "}
      <p>
        To delete an account send an email to{" "}
        <a href="mailto:support@shinobi.cc">support@shinobi.cc</a>
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
    </body>
  </div>
);

export default Delete;
