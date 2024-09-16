import VideoGrid from "../components/VideoGrid";

export default function ShowsPage() {
  const videos = JSON.parse(localStorage.getItem("videos"));
  const shows = videos.filter((video) => video.type === "show");

  return (
    <div className="py-4">
      <h1 className="text-4xl text-white font-bold mb-2">Shows:</h1>
      <VideoGrid videos={shows} />
    </div>
  );
}
