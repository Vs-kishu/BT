import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (videos.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap gap-3 ">
      {videos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video.id}>
          <VideoCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
