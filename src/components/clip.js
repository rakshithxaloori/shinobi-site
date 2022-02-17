import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { createAPIKit, handleAPIError } from "../utils/APIKit";
import VideoJS from "../utils/video";
import { getWindowDimensions } from "../utils/window";
import { clipUrlByNetSpeed } from "../utils/clip";
import { dateTimeDiff } from "../utils";
import { darkTheme } from "../utils/theme";

let PROFILE_ICON_SIZE = 50;
let GAME_ICON_SIZE = 15;

const Clip = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [videoOptions, setVideoOptions] = useState({});
  const [error, setError] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const isMobile = windowDimensions.width <= 768;

  const setVideoUri = (uri) => {
    const videoJsOptions = {
      // lookup the options in the docs for more options
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: clipUrlByNetSpeed(uri),
          type: "video/mp4",
        },
      ],
    };
    setVideoOptions(videoJsOptions);
  };

  useEffect(() => {
    const fetchClip = async () => {
      const onSuccess = (response) => {
        const { post } = response.data.payload;
        console.log(post);
        setVideoUri(post.clip.url);
        setPost(post);
      };

      const APIKit = await createAPIKit();
      APIKit.post(
        "feed/post/",
        { post_id: post_id },
        { cancelToken: cancelTokenSource.token }
      )
        .then(onSuccess)
        .catch((e) => {
          setError(handleAPIError(e));
        });
    };
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    fetchClip();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelTokenSource.cancel();
    };
  }, []);

  const videoStyle = isMobile
    ? {}
    : { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 };

  return post === null ? (
    <span>Loading ...</span>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: isMobile ? 20 : 0,
        paddingBottom: isMobile ? 20 : 0,
        margin: isMobile ? 0 : 20,
        width: isMobile ? windowDimensions.width : windowDimensions.width * 0.9,
        maxHeight: windowDimensions.width * 0.9,
        backgroundColor: darkTheme.surface,
        borderRadius: isMobile ? 0 : 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          marginTop: 15,
          marginLeft: 15,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            style={{
              height: PROFILE_ICON_SIZE,
              width: PROFILE_ICON_SIZE,
              borderRadius: PROFILE_ICON_SIZE / 2,
            }}
            alt={post.posted_by.username}
            src={post.posted_by.picture}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: darkTheme.on_surface_title,
                marginBottom: 3,
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                {post.posted_by.username}
              </span>
              <span style={{ marginLeft: 5, marginRight: 5 }}>{"\u0387"}</span>
              <span>{dateTimeDiff(post.created_datetime)} ago</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: darkTheme.on_surface_subtitle,
              }}
            >
              <img
                style={{
                  height: GAME_ICON_SIZE,
                  width: GAME_ICON_SIZE,
                  borderRadius: GAME_ICON_SIZE / 2,
                }}
                alt={post.game.name}
                src={post.game.logo_url}
              />
              <span style={{ marginLeft: 5, fontSize: GAME_ICON_SIZE - 2 }}>
                {post.game.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 15,
            marginBottom: 5,
            color: darkTheme.on_surface_title,
          }}
        >
          {post.title}
        </span>
        {post.tags.length > 0 && (
          <span style={{ fontSize: 12, color: darkTheme.on_surface_subtitle }}>
            - with {post.tags[0].username}
          </span>
        )}
      </div>
      {typeof post?.id === "string" ? (
        <VideoJS options={videoOptions} style={videoStyle} />
      ) : null}
    </div>
  );
};

export default Clip;
