import React from "react";

const PlayStore = () => (
  <a href="https://play.google.com/store/apps/details?id=cc.shinobi.android">
    <img
      src={process.env.PUBLIC_URL + "/PlayStore.png"}
      height={60}
      className="Play-store-button"
      alt="Play Store"
    />
  </a>
);

export default PlayStore;
