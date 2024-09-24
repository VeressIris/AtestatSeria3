import Suggestions from "../components/Suggestions";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  const categories = [
    "JavaScript",
    "Frontend",
    "Languages",
    "Backend",
    "Low level",
    "Web Frameworks",
    "CSS",
    "Tools",
  ];
  const videos = JSON.parse(localStorage.getItem("videos"));

  return (
    <div className="py-4">
      <div className="flex items-end">
        <h1 className="text-4xl text-white font-bold mb-2">Categories:</h1>
        <div className="mb-2 ml-3">
          <Link
            to={"/categories/all"}
            className="text-white text-xl active:text-slate-300 hover:text-slate-400 transition-all duration-75 ease-in-out"
          >
            View all
          </Link>
        </div>
      </div>
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
