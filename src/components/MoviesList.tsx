import React from "react";
import { Movie } from "../types/movies";
import MovieCard from "./MovieCard";

type Props = {
    movies: Movie[];
};

const MoviesList = (props: Props) => {
    const { movies } = props;

    return (
        <div className="movies__list">
            {movies.map((movie) => {
                return (
                    <MovieCard
                        key={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        imdbID={movie.imdbID}
                        type={movie.Type}
                        poster={movie.Poster}
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;
