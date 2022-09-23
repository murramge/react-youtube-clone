import React from "react";
import styles from "./video_item.module.css";

const Video = (props) => {
  const { video, onVideoClick, display } = props;
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className={styles.thumbnail}
          alt="video thumbnail"
        ></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default Video;
