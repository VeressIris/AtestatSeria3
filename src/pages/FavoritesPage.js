import VideoGrid from "../components/VideoGrid";

export default function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <div className="py-4">
      <h1 className="text-4xl text-white font-bold">Favorites:</h1>
      {favorites === null || favorites.length === 0 ? (
        <p className="text-white text-lg mt-2">There's nothing here... 😔</p>
      ) : (
        <VideoGrid videos={favorites} />
      )}
    </div>
  );
}
