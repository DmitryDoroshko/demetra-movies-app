import React, { useEffect } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

type Props = {};

const App: React.FC = (props: Props) => {
    const { movies, moviesSorted, loading, error, sortingDescending } =
        useTypedSelector((state) => state.movies);

    const { fetchMovies } = useActions();

    const handleMovieSearch = (title: string, year: string, plot: string) => {
        fetchMovies(title, parseInt(year), plot);
    };

    return (
        <div className="app">
            <Header />
            <main>
                <div className="container">
                    <SearchMovie onMovieSearch={handleMovieSearch} />
                    <div className="movie-sort__actions">
                        <button className="btn">
                            Sort{" "}
                            {sortingDescending ? "Descending" : "Ascending"}
                        </button>
                    </div>
                    <MoviesList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
