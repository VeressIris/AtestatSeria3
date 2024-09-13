import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import MoviesPage from "./pages/MoviesPage.js";
import MoviePage from "./pages/MoviePage.js";
import HomePage from "./pages/HomePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowsPage from "./pages/ShowsPage.js";

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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
