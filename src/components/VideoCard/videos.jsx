import React, { Component } from "react";
import Video from "../VideoCard/video";

class Videos extends Component {
  render() {
    const { onVideoClick } = this.props;
    return (
      <ul className="video-list">
        {this.props.videos.map((video) => (
          <Video video={video} onVideoClick={onVideoClick} />
        ))}
      </ul>
    );
  }
}

export default Videos;
