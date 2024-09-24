import { useNavigate } from "react-router-dom";

export default function VideoPreview({ video }) {
  const navigate = useNavigate();

  function getThumbnailFileName(title) {
    return (
      "/fireshipIO_thumbnails/" +
      title.replace(/[ /?:]/g, "_") +
      "_thumbnail.jpg"
    );
  }

  const thumbnail =
    video.type === "movie"
      ? getThumbnailFileName(video.title)
      : getThumbnailFileName(video.episodes[0].title);

  return (
    <div
      onClick={() => {
        localStorage.setItem("video", JSON.stringify(video));
        if (video.type === "movie") {
          navigate("/movies/" + video.title.replace(/[/?]/g, ""));
        } else {
          navigate("/shows/" + video.title.replace(/[/?]/g, ""));
        }
      }}
      className="p-6 mr-2 mb-2 rounded-xl flex flex-col items-center hover:bg-slate-950 hover:scale-105 hover:cursor-pointer active:scale-100 transition-all duration-100 ease-in-out"
    >
      <img src={thumbnail} alt={video.title} className="w-72 mb-2" />
      <h3 className="text-white text-lg font-medium line-clamp-2">
        {video.title}
      </h3>
    </div>
  );
}
