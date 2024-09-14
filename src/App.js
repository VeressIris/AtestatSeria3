import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import MoviesPage from "./pages/MoviesPage.js";
import MoviePage from "./pages/MoviePage.js";
import ShowsPage from "./pages/ShowsPage.js";
import ShowPage from "./pages/ShowPage.js";
import HomePage from "./pages/HomePage.js";
import CategoriesPage from "./pages/CategoriesPage.js";
import CategoryPage from "./pages/CategoryPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const categories = [
    "JavaScript",
    "Frontend",
    "Languages",
    "Backend",
    "Web Frameworks",
    "CSS",
    "Tools",
  ];

  // get all video data
  const videos = localStorage.getItem("videos");
  if (!videos) {
    import("./videoData.json")
      .then((data) => {
        localStorage.setItem("videos", JSON.stringify(data.default));
        console.log("Loaded videos");
      })
      .catch((error) => {
        console.error("Failed to load videos", error);
      });
  } else {
    console.log("Videos already loaded");
  }

  return (
    <Router>
      <Navbar />
      <div className="px-20 py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/movies/:name" element={<MoviePage />} />
          <Route path="/shows/:name" element={<ShowPage />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
