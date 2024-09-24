import EpisodeComponent from "../components/EpisodeComponent";
import { Link } from "react-router-dom";
import Suggestions from "../components/Suggestions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

export default function ShowPage() {
  const { name } = useParams();
  const location = useLocation();
  const [show, setShow] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorited, setFavorited] = useState(
    favorites.find((favorite) => favorite.title === name)
  );

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
  }, [name, location.pathname]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const rating = show.rating;

  function addToFavorites() {
    if (favorited) {
      setFavorited(false);
      const newFavorites = favorites.filter(
        (favorite) => favorite.title !== show.title
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      setFavorited(true);
      favorites.push(show);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  return (
    <div className="flex items-center flex-col my-4">
      {!selectedEpisode ? (
        <img
          src={
            "../fireshipIO_thumbnails/" +
            episodes[0].title.replace(/[ /?:]/g, "_") +
            "_thumbnail.jpg"
          }
          alt="thumbnail"
          className="w-[1080px] mb-4"
        />
      ) : (
        <VideoPlayer
          videoSrc={"../fireshipIO_videos/" + selectedEpisode + ".mp4"}
        />
      )}
      <div className="flex flex-col justify-start w-full">
        <div className="flex items-center">
          <h1 className="text-3xl text-white font-medium mb-2 mr-2">
            {show.title}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#ffffff"
            onClick={addToFavorites}
            className={
              "hover:cursor-pointer active:fill-red-600" +
              (favorited ? " fill-red-500" : "fill-white")
            }
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
        </div>
        <p className="text-lg text-white">
          <span className="font-medium">Release:</span> {show.release_date} -{" "}
          {show.end_date}
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
          <span className="font-medium">Description:</span> {show.description}
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
          {episodes.map((episode, index) => (
            <EpisodeComponent
              episode={episode}
              index={index + 1}
              setSelectedEpisode={setSelectedEpisode}
            />
          ))}
        </div>
        <Suggestions title="Suggestions" suggestions={suggestions} />
      </div>
    </div>
  );
}
