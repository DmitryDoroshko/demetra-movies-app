import React from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";

type Props = {
  title: string;
  year: number;
  imdbID: string;
  type: string;
  poster: string;
};

const MovieCard = (props: Props) => {
  const { title, year, imdbID, poster, type } = props;

  const { fetchSingleMovieById } = useActions();

  const navigate = useNavigate();

  const handleButtonDetailsClick = () => {
    fetchSingleMovieById(imdbID);
    navigate(`${imdbID}`);
  };

  return (
    <div className="movie__card">
      <img src={poster} alt="A random pic" className="movie__img" />
      <p className="movie__info">Title: {title}</p>
      <p className="movie__info">imdbID: {imdbID}</p>
      <p className="movie__info">Year: {year}</p>
      <p className="movie__info">Type: {type}</p>
      <button className="btn btn--details" onClick={handleButtonDetailsClick}>
        Details of {title}
      </button>
    </div>
  );
};

export default MovieCard;
