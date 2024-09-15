import EpisodeComponent from "../components/EpisodeComponent";
import { Link } from "react-router-dom";

export default function ShowPage() {
  const show = JSON.parse(localStorage.getItem("video"));
  const rating = show.rating;
  const episodes = show.episodes;

  return (
    <div className="flex items-center flex-col my-4">
      <img
        src={
          "../fireshipIO_thumbnails/" +
          episodes[0].title.replaceAll(" ", "_").replaceAll("/", "_") +
          "_thumbnail.jpg"
        }
        alt="thumbnail"
        className="w-[1080px] mb-4"
      />
      <div className="flex flex-col justify-start w-full">
        <h1 className="text-3xl text-white font-medium mb-2">{show.title}</h1>
        <p className="text-lg text-white">
          <span className="font-medium">Release:</span> {show.releaseDate}
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
            <EpisodeComponent episode={episode} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
