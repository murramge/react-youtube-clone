import React from "react";
import Video from "../VideoCard/video";
import styles from "./video_list.module.css";

const Videos = (props) => {
  const { onVideoClick, display } = props;
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <Video
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default Videos;
