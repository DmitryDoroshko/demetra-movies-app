import React from "react";
import MoviesList from "../components/MoviesList";
import SearchMovie from "../components/SearchMovie";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {};

const MoviesMain = (props: Props) => {
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
        <main>
            <div className="container">
                <SearchMovie onMovieSearch={handleMovieSearch} />
                <div className="movie-sort__actions">
                    <button className="btn" onClick={handleSortMovies}>
                        Sort {sortingDescending ? "Descending" : "Ascending"}
                    </button>
                </div>
                {loadingElement}
                {errorElement}
                <MoviesList movies={moviesSorted} />
            </div>
        </main>
    );
};

export default MoviesMain;
