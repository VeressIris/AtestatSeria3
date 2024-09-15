export default function EpisodeComponent({ episode, index }) {
  return (
    <div className="p-4 bg-slate-800 my-4 rounded-lg max-w-[650px]">
      <div className="flex items-center mb-2">
        <img
          src={
            "../fireshipIO_thumbnails/" +
            episode.title
              .replaceAll(" ", "_")
              .replaceAll("/", "_")
              .replaceAll("?", "_") +
            "_thumbnail.jpg"
          }
          alt={episode.title}
          className="w-28 mr-4"
        />
        <h4 className="text-white font-medium text-xl">
          {index}. {episode.title}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          width="36px"
          viewBox="0 -960 960 960"
          fill="#FFFFFF"
          className="ml-auto hover:cursor-pointer active:fill-slate-300 active:scale-95 transition-transform duration-100 ease-in-out"
        >
          <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </div>
      <p className="text-white">
        <span className="font-medium">Description: </span>
        {episode.description}
      </p>
    </div>
  );
}
