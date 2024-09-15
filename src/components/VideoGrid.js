import VideoPreview from "./VideoPreview";

export default function VideoGrid({ videos }) {
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => {
          return <VideoPreview video={video} />;
        })}
      </div>
    </div>
  );
}
