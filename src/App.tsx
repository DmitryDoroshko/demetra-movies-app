import React, { Fragment } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MoviesMain from "./pages/MoviesMain";
import MovieSpecific from "./pages/MovieSpecific";
import About from "./pages/About";

type Props = {};

const App: React.FC = (props: Props) => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route
                    path="/movies"
                    element={
                        <Fragment>
                            <MoviesMain />
                        </Fragment>
                    }
                />
                <Route path="/movies/:movieId" element={<MovieSpecific />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
