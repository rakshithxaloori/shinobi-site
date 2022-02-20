import React from "react";
import { ImFacebook, ImReddit, ImTwitter } from "react-icons/im";
import { HiOutlineClipboardCheck, HiOutlineClipboard } from "react-icons/hi";

import { darkTheme } from "../utils/theme";
import { getWindowDimensions } from "../utils/window";

const SOCIALS_ICON_SIZE = 30;
const CLIPBOARD_ICON_SIZE = 26;

const FB_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

const Share = ({ post }) => {
  const [copied, setCopied] = React.useState(false);
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  const isMobile = windowDimensions.width <= 768;

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shinobi_url = `https://shinobi.cc/clip/${post.id}`;
  const facebook_text = `A ${post.game.name} clip by ${post.posted_by.username} | Shinobi`;
  const reddit_title = post.title;
  const reddit_text = `${post.posted_by.username} | Shinobi\n${shinobi_url}`;
  const twitter_text = `${post.title}\nA ${post.game.name} clip by ${post.posted_by.username} | Shinobi\n${shinobi_url}`;

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const clickCopy = async () => {
    await copyTextToClipboard(shinobi_url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        margin: isMobile ? 0 : 10,
        backgroundColor: isMobile ? darkTheme.background : darkTheme.surface,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            color: darkTheme.on_background,
          }}
        >
          {shinobi_url}
        </span>
        <span onClick={clickCopy}>
          {copied ? (
            <HiOutlineClipboardCheck
              size={CLIPBOARD_ICON_SIZE}
              color={darkTheme.on_background}
            />
          ) : (
            <HiOutlineClipboard
              size={CLIPBOARD_ICON_SIZE}
              color={darkTheme.on_background}
            />
          )}
        </span>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href={`https://www.facebook.com/sharer/sharer.php?app_id=${FB_APP_ID}&u=${encodeURI(
            shinobi_url
          )}&quote=${encodeURI(facebook_text)}`}
          rel="noopener noreferrer"
          target="_blank"
          style={styles.icon}
        >
          <ImFacebook size={SOCIALS_ICON_SIZE} color="#4267B2" />
        </a>
        <a
          href={`https://reddit.com/submit?title=${encodeURI(
            reddit_title
          )}&text=${encodeURI(reddit_text)}`}
          rel="noopener noreferrer"
          target="_blank"
          style={styles.icon}
        >
          <ImReddit size={SOCIALS_ICON_SIZE} color="#FF5700" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            twitter_text
          )}`}
          rel="noopener noreferrer"
          target="_blank"
          style={styles.icon}
        >
          <ImTwitter size={SOCIALS_ICON_SIZE} color="#1DA1F2" />
        </a>
      </section>
    </div>
  );
};

const styles = {
  icon: { margin: 10 },
};

export default Share;
