import VideoGrid from "../components/VideoGrid";

export default function MoviesPage() {
  const videos = JSON.parse(localStorage.getItem("videos"));
  const movies = videos.filter((video) => video.type === "movie");

  return (
    <div className="py-4">
      <h1 className="text-4xl text-white font-bold mb-2">Movies:</h1>
      <VideoGrid videos={movies} />
    </div>
  );
}
