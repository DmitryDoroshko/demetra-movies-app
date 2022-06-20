import React from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import MoviesMain from "./pages/MoviesMain";
import MovieSpecific from "./pages/MovieSpecific";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movies" element={<MoviesMain />} />
        <Route path="/movies/:movieId" element={<MovieSpecific />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="*" element={<h2>Page not found...</h2>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
