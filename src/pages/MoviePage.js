import { Link } from "react-router-dom";

export default function MoviePage() {
  const movie = JSON.parse(localStorage.getItem("video"));
  const rating = movie.rating;
  return (
    <div className="flex items-center flex-col">
      <img
        src={
          "../fireshipIO_thumbnails/" +
          movie.title.replaceAll(" ", "_").replaceAll("/", "_") +
          "_thumbnail.jpg"
        }
        alt="thumbnail"
        className="w-[1080px] mb-4"
      />
      <div className="flex flex-col justify-start w-full">
        <h1 className="text-3xl text-white font-medium mb-2">{movie.title}</h1>
        <p className="text-lg text-white">
          <span className="font-medium">Release:</span> {movie.releaseDate}
        </p>
        <div className="flex items-center">
          <p className="text-lg text-white font-medium pr-1">Rating:</p>
          {[...Array(rating)].map((e, i) => (
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
          <span className="font-medium">Description:</span> {movie.description}
        </p>
        <p className="text-lg text-white">
          <span className="font-medium">Categories: </span>
          {movie.categories.map((category, index) => {
            return (
              <Link
                to={"/categories" + category}
                className="text-white text-md mb-1 rounded-xl active:text-red-300 hover:text-red-200"
                onClick={() => localStorage.setItem("category", category)}
              >
                {category},{" "}
              </Link>
            );
          })}
        </p>
      </div>
    </div>
  );
}
