import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Suggestions from "../components/Suggestions";
import VideoPlayer from "../components/VideoPlayer";

export default function MoviePage() {
  const { name } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorited, setFavorited] = useState(
    favorites.find((favorite) => favorite.title === name)
  );

  useEffect(() => {
    const storedMovie = JSON.parse(localStorage.getItem("video"));
    setMovie(storedMovie);

    const videos = JSON.parse(localStorage.getItem("videos"));
    console.log(videos);
    const relatedSuggestions = videos.filter((video) => {
      return video.categories.some((category) =>
        storedMovie.categories.includes(category)
      );
    });
    setSuggestions(relatedSuggestions);
  }, [name, location.pathname]);

  if (!movie || !movie.categories) {
    return <div>Loading...</div>;
  }

  const rating = movie.rating;

  function addToFavorites() {
    if (favorited) {
      setFavorited(false);
      const newFavorites = favorites.filter(
        (favorite) => favorite.title !== movie.title
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      setFavorited(true);
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  return (
    <div className="flex items-center flex-col my-4">
      <VideoPlayer
        thumbnail={
          "../fireshipIO_thumbnails/" +
          movie.title.replace(/[ /?:]/g, "_") +
          "_thumbnail.jpg"
        }
        videoSrc={
          "../fireshipIO_videos/" + movie.title.replaceAll("/", "") + ".mp4"
        }
      />
      <div className="flex flex-col justify-start w-full">
        <div className="flex items-center">
          <h1 className="text-3xl text-white font-medium mb-2 mr-2">
            {movie.title}
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
          <span className="font-medium">Release:</span> {movie.release_date}
        </p>
        <div className="flex items-center">
          <p className="text-lg text-white font-medium pr-1">Rating:</p>
          {[...Array(rating)].map((e, i) => (
            <svg
              key={i}
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
          <span className="font-medium">Description:</span> {movie.description}
        </p>
        <p className="text-lg text-white">
          <span className="font-medium">Categories: </span>
          {movie.categories.map((category, index) => (
            <Link
              key={index}
              to={"/categories/" + category}
              className="text-white text-md mb-1 rounded-xl active:text-red-300 hover:text-red-200"
              onClick={() => localStorage.setItem("category", category)}
            >
              {category},{" "}
            </Link>
          ))}
        </p>
        <Suggestions title="Suggestions" suggestions={suggestions} />
      </div>
    </div>
  );
}
