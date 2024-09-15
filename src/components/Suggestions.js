import { useRef } from "react";
import VideoPreview from "./VideoPreview";

export default function Suggestions({ title, suggestions }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative py-4">
      <h2 className="text-3xl text-white font-bold mb-2">{title}:</h2>
      <div className="flex items-center relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 text-white text-xl p-2 rounded-full hover:text-slate-300 active:text-slate-200"
        >
          &#9664;
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth p-2"
        >
          {suggestions.map((suggestion) => {
            return (
              <div key={suggestion.id} className="flex-shrink-0 w-72">
                <VideoPreview video={suggestion} />
              </div>
            );
          })}
        </div>
        {suggestions.length > 5 ? (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 text-white text-xl p-2 rounded-full hover:text-slate-300 active:text-slate-200"
          >
            &#9654;
          </button>
        ) : null}
      </div>
    </div>
  );
}
