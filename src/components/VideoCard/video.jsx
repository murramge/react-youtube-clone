import React, { Component } from "react";
import "../../css/video.css";

class Video extends Component {
  render() {
    const { video } = this.props;

    return (
      <li className="video">
        <img
          src={video.snippet.thumbnails.medium.url}
          className="video-thumbnails"
          alt=""
        ></img>
        <div className="video-name-context">
          <span className="video-name">{video.snippet.title}</span>
          <div className="video-channel-name">
            <span>{video.snippet.channelTitle}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
