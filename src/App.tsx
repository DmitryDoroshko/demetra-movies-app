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
    const { sortMoviesByOrder } = useActions();

    const handleMovieSearch = (title: string, year: string, plot: string) => {
        fetchMovies(title, year, plot);
    };

    const handleSortMovies = () => {
        sortMoviesByOrder(movies, sortingDescending);
    };

    const loadingElement = loading && (
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            The movies are loading...
        </p>
    );

    const errorElement = error ? (
        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>{error}</p>
    ) : (
        ""
    );

    return (
        <div className="app">
            <Header />
            <main>
                <div className="container">
                    <SearchMovie onMovieSearch={handleMovieSearch} />
                    <div className="movie-sort__actions">
                        <button className="btn" onClick={handleSortMovies}>
                            Sort{" "}
                            {sortingDescending ? "Descending" : "Ascending"}
                        </button>
                    </div>
                    {loadingElement}
                    {errorElement}
                    <MoviesList movies={moviesSorted} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
