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
