import VideoGrid from "../components/VideoGrid";

export default function CategoryPage() {
  const category = localStorage.getItem("category");
  const videos = JSON.parse(localStorage.getItem("videos"));

  return (
    <div className="py-4">
      <h1 className="text-3xl text-white font-bold">{category}</h1>
      <VideoGrid
        videos={videos.filter((video) => video.categories.includes(category))}
      />
    </div>
  );
}
