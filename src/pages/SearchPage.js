import VideoGrid from "../components/VideoGrid";

export default function SearchPage({ searchTerm }) {
  const videos = JSON.parse(localStorage.getItem("videos"));
  const filteredVideos = videos.filter((video) => {
    return (
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tagsContainSearchTerm(video.categories)
    );
  });

  function tagsContainSearchTerm(tags) {
    return tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="py-4">
      <p className="text-white text-lg">
        Showing {filteredVideos.length} result(s) for "{searchTerm}"
      </p>
      <VideoGrid videos={filteredVideos} />
    </div>
  );
}
