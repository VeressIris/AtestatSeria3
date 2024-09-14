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
    <div className="">
      <h1 className="text-3xl text-white font-bold">Categories:</h1>
      <div>
        {categories.map(
          (category) => (
            (
              <Suggestions
                title={category}
                suggestions={videos.filter((video) =>
                  video.categories.includes(category)
                )}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
