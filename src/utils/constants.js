export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_YOUTUBE_API;

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=kishan&type=video&key=" +
  process.env.REACT_APP_GOOGLE_YOUTUBE_API;

export const VIDEO_CATEGORY =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en_IN&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_YOUTUBE_API;
