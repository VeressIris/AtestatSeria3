import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Suggestions from "../components/Suggestions";
import VideoPlayer from "../components/VideoPlayer";

export default function MoviePage() {
  const { movieTitle } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedMovie = JSON.parse(localStorage.getItem("video"));
    setMovie(storedMovie);

    const videos = JSON.parse(localStorage.getItem("videos"));
    const relatedSuggestions = videos.filter((video) => {
      return video.categories.some((category) =>
        storedMovie.categories.includes(category)
      );
    });
    setSuggestions(relatedSuggestions);
  }, [movieTitle, location.pathname]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const rating = movie.rating;

  return (
    <div className="flex items-center flex-col my-4">
      <VideoPlayer
        thumbnail={
          "../fireshipIO_thumbnails/" +
          movie.title.replace(/[ /?:]/g, "_") +
          "_thumbnail.jpg"
        }
        videoSrc={"../fireshipIO_videos/" + "C in 100 Seconds" + ".mp4"}
      />
      {/* <img
        src={
          "../fireshipIO_thumbnails/" +
          movie.title.replace(/[ /?:]/g, "_") +
          "_thumbnail.jpg"
        }
        alt="thumbnail"
        className="w-[1080px] mb-4"
      /> */}
      <div className="flex flex-col justify-start w-full">
        <h1 className="text-3xl text-white font-medium mb-2">{movie.title}</h1>
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
