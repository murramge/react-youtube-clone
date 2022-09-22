import React from "react";
import Video from "../VideoCard/video";
import styles from "./video_list.module.css";

const Videos = (props) => {
  const { onVideoClick } = props;
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <Video key={video.id} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
};

export default Videos;
