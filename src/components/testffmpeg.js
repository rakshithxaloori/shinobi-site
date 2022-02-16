import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
  log: true,
});

const Test = () => {
  const [ready, setReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState({});
  const [videoURL, setVideoURL] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");

  useEffect(() => {
    const load = async () => {
      await ffmpeg.load();
      setReady(true);
    };
    load();
  }, []);

  const onInputChange = (event) => {
    setVideoSrc(event.target.files[0]);
  };

  const doTranscode = async () => {
    if (!ready) return;
    setMessage("Start transcoding");
    ffmpeg.FS("writeFile", "test.avi", await fetchFile(videoSrc));
    await ffmpeg.run("-i", "test.avi", "test.mp4");
    setMessage("Complete transcoding");
    const data = ffmpeg.FS("readFile", "test.mp4");
    setVideoURL(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
  };
  return ready ? (
    <div>
      <p />
      <input type="file" accept="video/*" onChange={onInputChange} />
      {videoURL !== "" && <video src={videoURL} controls></video>}
      <br />
      <button onClick={doTranscode}>Start</button>
      <p>{message}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Test;
