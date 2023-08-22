import React, { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link, json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { searchKey } = useSelector((store) => store.searchword);
  useEffect(() => {
    if (searchKey) {
      searchVideos();
      console.log("searchvideo");
    } else {
      getVideos();
      console.log("getvideos");
    }
  }, [searchKey]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  const searchVideos = async () => {
    const data = await fetch(SEARCH_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  console.log(videos);

  if (videos === undefined || videos?.length === 0) {
    return <Shimmer />;
  }
  if (json.error)
    return (
      <div className="flex flex-wrap gap-3 ">
        {videos?.map((video) => (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCard videos={video} />
          </Link>
        ))}
      </div>
    );
};

export default VideoContainer;
