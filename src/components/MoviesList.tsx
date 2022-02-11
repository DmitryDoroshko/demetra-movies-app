import React from "react";
import MovieCard from "./MovieCard";

type Props = {};

const MoviesList = (props: Props) => {
    return (
        <div className="movies__list">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
};

export default MoviesList;
