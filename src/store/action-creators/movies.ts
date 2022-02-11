import axios from "axios";
import { Dispatch } from "redux";
import { MoviesAction, MoviesActionTypes } from "../../types/movies";
import { movieAPIKey, movieAPIName } from "../../utils/constants";

export const fetchMovies = (title: string, year: number, plot: string) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            let fullUrlToFetchMovies: string = `${movieAPIName}?`;
            if (title.trim() === "") {
                throw new Error("Invalid title...");
            }
            if (year.toString() === "") {
                fullUrlToFetchMovies += `t=${title};`;
            }
            if (plot.toString() === "") {
            } else {
                fullUrlToFetchMovies += "&plot=full";
            }
            fullUrlToFetchMovies += movieAPIKey;
            const response = await axios.get(fullUrlToFetchMovies);
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: "Error loading movies",
            });
        }
    };
};
