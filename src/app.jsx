import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import Videos from "./components/VideoCard/videos";
import "./app.css";
function App(props) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&key=AIzaSyDayJ41-72DoM1-EFXhsVW9nYEvFYQwSbA`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => json.items)
      .then((items) => {
        setVideos(items);
      })

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
  // console.log(videos);
  return (
    <>
      <SearchBar Onsearch={search} />
      <Videos videos={videos} />
    </>
  );
}

export default App;
