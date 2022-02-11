import React from "react";

type Props = {};

const SearchMovie = (props: Props) => {
    return (
        <section className="search-movie">
            <form className="search-movie__form">
                <div className="search-movie__input">
                    <label htmlFor="movie-title">Enter movie title:</label>
                    <input
                        type="text"
                        id="movie-title"
                        placeholder="Movie title..."
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
                    />
                </div>
                <div className="search-movie__input">
                    <label htmlFor="movie-plot">Enter plot:</label>
                    <select name="plot" id="movie-plot">
                        <option value="short">Short</option>
                        <option value="long">Long</option>
                    </select>
                </div>
                <div className="search-movie__buttons">
                    <button className="btn btn--search" type="submit">
                        Search
                    </button>
                    <button className="btn btn--reset">Reset</button>
                </div>
            </form>
        </section>
    );
};

export default SearchMovie;
