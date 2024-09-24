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
import { useLocation } from "react-router-dom";
import videos from "./videoData.json";
import AboutPage from "./pages/AboutPage.js";
import SearchPage from "./pages/SearchPage.js";
import { useState } from "react";
import EpisodePage from "./pages/EpisodePage.js";
import AllCategoriesPage from "./pages/AllCategoriesPage.js";
import FavoritesPage from "./pages/FavoritesPage.js";

function App() {
  localStorage.setItem("videos", JSON.stringify(videos));

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<MoviesPage />} />
          <Route path="/series" element={<ShowsPage />} />
          <Route
            path="/videos/:name"
            element={<MoviePage key={useLocation} />}
          />
          <Route path="/series/:name" element={<ShowPage />} />
          <Route
            path="/series/:name/:episodeTitle"
            element={<EpisodePage key={window.location.pathname} />}
          />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/categories/:name" element={<CategoryPage />} />
          <Route path="/categories/all" element={<AllCategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route
            path="/search"
            element={<SearchPage searchTerm={searchTerm} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
