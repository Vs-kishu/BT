import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  console.log(YOUTUBE_API);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-3 ">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id}>
          <VideoCard key={video.id} videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
