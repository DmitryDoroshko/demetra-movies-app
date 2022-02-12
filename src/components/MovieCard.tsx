import React from "react";

type Props = {
    title: string;
    year: number;
    imdbID: string;
    type: string;
    poster: string;
};

const MovieCard = (props: Props) => {
    const { title, year, imdbID, poster, type } = props;
    return (
        <div className="movie__card">
            <img src={poster} alt="A random pic" className="movie__img" />
            <p className="movie__info">Title: {title}</p>
            <p className="movie__info">imdbID: {imdbID}</p>
            <p className="movie__info">Year: {year}</p>
            <p className="movie__info">Type: {type}</p>
            <button className="btn btn--details">Details of {title}</button>
        </div>
    );
};

export default MovieCard;
