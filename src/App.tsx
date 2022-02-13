import React, { Fragment } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import MoviesMain from "./pages/MoviesMain";
import MovieSpecific from "./pages/MovieSpecific";
import About from "./pages/About";

type Props = {};

const App: React.FC = (props: Props) => {
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
