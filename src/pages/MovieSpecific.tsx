import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/UI/Card";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {};

const MovieSpecific = (props: Props) => {
    const params = useParams();
    const navigate = useNavigate();
    const { loading, error, movieFetched } = useTypedSelector(
        (state) => state.movies
    );
    const { fetchSingleMovieById } = useActions();

    useEffect(() => {
        if (params.movieId) {
            fetchSingleMovieById(params.movieId);
        }
    }, []);

    const handleGoBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <Card>
            {loading && <p>Content is loading...</p>}
            {error && <p>{error}</p>}
            {movieFetched && (
                <div>
                    <img src={movieFetched["Poster"]} alt="Poster" />
                    <p>Title: {movieFetched["Title"]}</p>
                    <p>Year: {movieFetched["Year"]}</p>
                    <p>imdbID: {movieFetched["imdbID"]}</p>
                    <p>Type: {movieFetched["Type"]}</p>
                    <p>Released: {movieFetched["Released"]}</p>
                    <p>Runtime: {movieFetched["Runtime"]}</p>
                    <p>Genre: {movieFetched["Genre"]}</p>
                    <p>Director: {movieFetched["Director"]}</p>
                    <p>Writer: {movieFetched["Writer"]}</p>
                    <p>Language: {movieFetched["Language"]}</p>
                    <p>Country: {movieFetched["Country"]}</p>
                    <button className="btn" onClick={handleGoBackButtonClick}>
                        Go Back
                    </button>
                </div>
            )}
        </Card>
    );
};

export default MovieSpecific;

/*

   <img src={movieFetched.Poster} alt="Poster" />
                    <p>Title: {movieFetched.Title}</p>
                    <p>Year: {movieFetched.Year}</p>
                    <p>imdbID: {movieFetched.imdbID}</p>
                    <p>Type: {movieFetched.Type}</p>
                    <p>Released: {movieFetched.Released}</p>
                    <p>Runtime: {movieFetched.Runtime}</p>
                    <p>Genre: {movieFetched.Genre}</p>
                    <p>Director: {movieFetched.Director}</p>
                    <p>Writer: {movieFetched.Writer}</p>
                    <p>Language: {movieFetched.Language}</p>
                    <p>Country: {movieFetched.Country}</p>
*/
