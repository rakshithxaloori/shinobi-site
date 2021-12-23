import React from "react";

import PlayStoreImg from "../PlayStore.png";

const PlayStore = () => (
  <a href="https://play.google.com/store/apps/details?id=cc.shinobi.android">
    <img
      src={PlayStoreImg}
      height={60}
      className="Play-store-button"
      alt="Play Store"
    />
  </a>
);

export default PlayStore;
