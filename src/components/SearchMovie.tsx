import React, { useState } from "react";

type Props = {
    onMovieSearch: (title: string, year: string, plot: string) => void;
};

const SearchMovie = (props: Props) => {
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [movieYear, setMovieYear] = useState<string>("");
    const [moviePlot, setMoviePlot] = useState<string>("");

    const handleMovieTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMovieTitle(event.target.value);
    };

    const handleMovieYearChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMovieYear(event.target.value);
    };

    const handleMoviePlotChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setMoviePlot(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onMovieSearch(movieTitle, movieYear, moviePlot);
    };

    return (
        <section className="search-movie">
            <form className="search-movie__form">
                <div className="search-movie__input">
                    <label htmlFor="movie-title">Enter movie title:</label>
                    <input
                        type="text"
                        id="movie-title"
                        placeholder="Movie title..."
                        value={movieTitle}
                        onChange={(event) => handleMovieTitleChange(event)}
                    />
                </div>
                <div className="search-movie__input">
                    <label htmlFor="movie-year">Enter movie year:</label>
                    <input
                        type="number"
                        id="movie-year"
                        placeholder="Movie year..."
                        min="1900"
                        max="2100"
                        value={movieYear}
                        onChange={(event) => handleMovieYearChange(event)}
                    />
                </div>
                <div className="search-movie__input">
                    <label htmlFor="movie-plot">Enter plot:</label>
                    <select
                        name="plot"
                        id="movie-plot"
                        value={moviePlot}
                        onChange={(event) => handleMoviePlotChange(event)}
                    >
                        <option value="short">Short</option>
                        <option value="long">Long</option>
                    </select>
                </div>
                <div className="search-movie__buttons">
                    <button
                        className="btn btn--search"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Search
                    </button>
                    <button className="btn btn--reset">Reset</button>
                </div>
            </form>
        </section>
    );
};

export default SearchMovie;
