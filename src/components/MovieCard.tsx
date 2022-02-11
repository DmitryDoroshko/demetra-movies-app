import React from "react";

type Props = {};

const MovieCard = (props: Props) => {
    return (
        <div className="movie__card">
            <img
                src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
                alt="No movie"
                className="movie__img"
            />
            <p className="movie__info">Title: Titanic</p>
            <p className="movie__info">Year: 2000</p>
            <p className="movie__info">Imbd Rating: 8.5</p>
            <p className="movie__info">Released: Nov 2001</p>
            <p className="movie__info">Genre: Drama</p>
            <p className="movie__info">Director: Doroshko Dima</p>
            <p className="movie__info">Language: English</p>
            <button className="btn btn--details">Details...</button>
        </div>
    );
};

export default MovieCard;
