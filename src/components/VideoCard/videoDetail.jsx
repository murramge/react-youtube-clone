import React, { Component } from "react";
import Video from "../VideoCard/video";

class VideoDetail extends Component {
  render() {
    const { video } = this.props;
    console.log(video);
    return (
      <>
        <h1>{video.snippet.title}</h1>
      </>
    );
  }
}

export default VideoDetail;
