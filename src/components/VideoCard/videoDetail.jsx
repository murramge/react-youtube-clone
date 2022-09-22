import React from "react";

const VideoDetail = (props) => {
  const { video } = props;
  console.log(video);
  return (
    <>
      <iframe
        id={video.id}
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id.videoId || video.id}  `}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
      <span>{video.snippet.description}</span>
    </>
  );
};

export default VideoDetail;
