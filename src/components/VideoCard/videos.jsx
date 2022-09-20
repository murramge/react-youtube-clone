import React, { Component } from "react";
import Video from "../VideoCard/video";

class Videos extends Component {
  render() {
    return (
      <ul className="video-list">
        {this.props.videos.map((video) => (
          <Video video={video} />
        ))}
      </ul>
    );
  }
}

export default Videos;
