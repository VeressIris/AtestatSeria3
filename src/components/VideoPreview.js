import { useNavigate } from "react-router-dom";

export default function VideoPreview({ video }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/movies/" + video.title);
        localStorage.setItem("video", JSON.stringify(video));
      }}
      className="p-6 mr-2 rounded-xl flex flex-col items-center hover:bg-slate-950 hover:scale-105 active:scale-100 transition-all duration-100 ease-in-out"
    >
      <img src={video.image} alt={video.title} className="w-72 mb-2" />
      <h3 className="text-white text-lg font-medium">{video.title}</h3>
    </div>
  );
}
