import React from "react";

export const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { thumbnails, channelTitle } = snippet;
  const { likeCount, viewCount } = statistics;
  return (
    <div className="ml-3 p-2 cursor-pointer shadow-black shadow-md mt-3 w-80  rounded-xl hover:bg-slate-200">
      <img src={thumbnails.medium.url} className="object-fit" alt="video" />
      <ul>
        <li className="font-semibold">{channelTitle}</li>
        <li></li>
        <li className="space-x-3">
          <span>Like:{likeCount}</span>
          <span>Views: {viewCount}</span>
        </li>
      </ul>
    </div>
  );
};
