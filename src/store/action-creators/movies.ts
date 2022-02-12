import axios from "axios";
import { Dispatch } from "redux";
import { MoviesAction, MoviesActionTypes } from "../../types/movies";
import { movieAPIKey, movieAPIName } from "../../utils/constants";

export const fetchMovies = (title: string, year: string, plot: string) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            const fullUrlToFetchMovies = getCorrectUrl(title, year, plot);
            const response = await axios.get(fullUrlToFetchMovies);
            console.log("response", response);

            if (response.data.Error) {
                throw new Error(response.data.Error);
            }
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
                payload: response.data.Search,
            });
        } catch (error: any) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: error.message,
            });
        }
    };
};

const getCorrectUrl = (title: string, year: string, plot: string): string => {
    let fullUrlToFetchMovies: string;
    if (title.trim() === "") {
        throw new Error("Invalid title...");
    }

    if (year !== "" && plot.trim().toString() !== "") {
        fullUrlToFetchMovies = `${movieAPIName}?s=${title
            .toLowerCase()
            .split(" ")
            .join("+")}&y=${year.toString()}&plot=${plot
            .toLowerCase()
            .trim()
            .toString()}&${movieAPIKey}`;
    } else if (year !== "" && plot.trim().toString() === "") {
        fullUrlToFetchMovies = `${movieAPIName}?s=${title
            .toLowerCase()
            .split(" ")
            .join("+")}&y=${year.toString()}&${movieAPIKey}`;
    } else {
        fullUrlToFetchMovies = `${movieAPIName}?s=${title
            .toLowerCase()
            .split(" ")
            .join("+")}&${movieAPIKey}`;
    }

    return fullUrlToFetchMovies;
};
