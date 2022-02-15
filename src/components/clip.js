import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { createAPIKit, handleAPIError } from "../utils/APIKit";
import VideoJS from "../utils/video";
import { getWindowDimensions } from "../utils/window";
import { clipUrlByNetSpeed } from "../utils/clip";

const Clip = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [videoOptions, setVideoOptions] = useState({});
  const [error, setError] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

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
    console.log("SETTING OPTIONS");
    setVideoOptions(videoJsOptions);
  };

  useEffect(() => {
    const fetchClip = async () => {
      const onSuccess = (response) => {
        const { post } = response.data.payload;
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: windowDimensions.width * 0.9,
        maxHeight: windowDimensions.width * 0.9,
      }}
    >
      {typeof post?.id === "string" ? <VideoJS options={videoOptions} /> : null}
    </div>
  );
};

export default Clip;
