import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import Videos from "./components/VideoCard/videos";
import VideoDetail from "./components/VideoCard/videoDetail";
import styles from "./app.module.css";
const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <div className={styles.app}>
        <SearchBar Onsearch={search} />
        <section>
          <div>
            {selectedVideo && (
              <VideoDetail video={selectedVideo} videos={videos} />
            )}
          </div>
          <div>
            <Videos videos={videos} onVideoClick={selectVideo} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
