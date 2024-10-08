import EpisodeComponent from "../components/EpisodeComponent";
import { Link } from "react-router-dom";
import Suggestions from "../components/Suggestions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

export default function EpisodePage() {
  const { episodeTitle } = useParams();
  const location = useLocation();
  const [show, setShow] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const storedShow = JSON.parse(localStorage.getItem("video"));
    setShow(storedShow);

    const videos = JSON.parse(localStorage.getItem("videos"));
    const relatedSuggestions = videos.filter((video) => {
      return video.categories.some((category) =>
        storedShow.categories.includes(category)
      );
    });
    setSuggestions(relatedSuggestions);

    const episodes = storedShow.episodes;
    setEpisodes(episodes);

    const selectedEpisode = episodes.filter(
      (ep) => ep.title.replace("/", "") === episodeTitle
    );
    setEpisode(selectedEpisode[0]);

    window.scrollTo(0, 0);
  }, [episodeTitle, location.pathname]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const rating = show.rating;

  return (
    <div className="flex items-center flex-col my-4">
      <div className="w-full">
        <h1 className="text-3xl text-white font-medium mb-2">{show.title}</h1>
      </div>
      <VideoPlayer
        videoSrc={"../../fireshipIO_videos/" + episodeTitle + ".mp4"}
      />
      <div className="flex flex-col justify-start w-full">
        <h1 className="text-3xl text-white font-medium mb-2">{episodeTitle}</h1>
        <p className="text-lg text-white">
          <span className="font-medium">Release:</span> {episode.release_date}
        </p>
        <div className="flex items-center">
          <p className="text-lg text-white font-medium pr-1">Rating:</p>
          {[...Array(rating)].map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#facc15"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-lg text-white">
          <span className="font-medium">Description:</span>{" "}
          {episode.description}
        </p>
        <p className="text-lg text-white">
          <span className="font-medium">Categories: </span>
          {show.categories.map((category, index) => {
            return (
              <Link
                to={"/categories/" + category}
                className="text-white text-md mb-1 rounded-xl active:text-red-300 hover:text-red-200"
                onClick={() => localStorage.setItem("category", category)}
              >
                {category},{" "}
              </Link>
            );
          })}
        </p>
        <h2 className="text-white text-3xl font-medium mt-2">Episodes:</h2>
        <div className="">
          {episodes.map((ep, index) => (
            <EpisodeComponent
              episode={ep}
              index={index + 1}
              selected={ep.title === episodeTitle}
            />
          ))}
        </div>
        <Suggestions title="Suggestions" suggestions={suggestions} />
      </div>
    </div>
  );
}
