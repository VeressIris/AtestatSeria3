import Suggestions from "../components/Suggestions";

export default function CategoriesPage() {
  const categories = [
    "JavaScript",
    "Frontend",
    "Languages",
    "Backend",
    "Web Frameworks",
    "CSS",
    "Tools",
  ];
  const videos = JSON.parse(localStorage.getItem("videos"));

  return (
    <div className="py-4">
      <h1 className="text-4xl text-white font-bold mb-2">Categories:</h1>
      <div className="divide-slate-700 divide-y-2 divide-solid">
        {categories.map((category) => (
          <Suggestions
            title={category}
            suggestions={videos.filter((video) =>
              video.categories.includes(category)
            )}
          />
        ))}
      </div>
    </div>
  );
}
