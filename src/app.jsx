import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import Videos from "./components/VideoCard/videos";
import VideoDetail from "./components/VideoCard/videoDetail";
import styles from "./app.module.css";
const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=AIzaSyDayJ41-72DoM1-EFXhsVW9nYEvFYQwSbA`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) =>
        json.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDayJ41-72DoM1-EFXhsVW9nYEvFYQwSbA",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => json.items)
      .then((items) => {
        setVideos(items);
      })
      .catch((error) => console.log("error", error));
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
