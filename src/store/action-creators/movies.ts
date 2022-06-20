import axios from "axios";
import { Dispatch } from "redux";
import { Movie, MoviesAction, MoviesActionTypes } from "../../types/movies";
import { movieAPIKey, movieAPIName } from "../../utils/constants";

export const fetchMovies = (title: string, year: string, plot: string) => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const fullUrlToFetchMovies = getCorrectUrlForFetchingMovies(
        title,
        year,
        plot
      );
      const response = await axios.get(fullUrlToFetchMovies);

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

export const fetchSingleMovieById = (id: string) => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID });

      const fullUrlToFetchSingleMovie = getUrlToFetchSingleMovie(id);

      const response = await axios.get(fullUrlToFetchSingleMovie);

      if (response.data.Error) {
        throw new Error(response.data.Error);
      }
      dispatch({
        type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_ERROR,
        payload: error.message,
      });
    }
  };
};

function getUrlToFetchSingleMovie(id: string): string {
  if (id.trim().length === 0) {
    throw new Error("Invalid movie ID");
  }

  const url = `${movieAPIName}?apikey=5b4dccd9&i=${id}`;
  return url;
}

export const sortMoviesByOrder = (
  movies: Movie[],
  isSortingDescending: boolean
) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    let moviesSorted: Movie[];
    if (isSortingDescending) {
      moviesSorted = sortMovies(movies, isSortingDescending);
      dispatch({
        type: MoviesActionTypes.SORT_MOVIES_DESCENDING,
        payload: moviesSorted,
      });
    } else {
      moviesSorted = sortMovies(movies, isSortingDescending);
      dispatch({
        type: MoviesActionTypes.SORT_MOVIES_ASCENDING,
        payload: moviesSorted,
      });
    }
  };
};

export const reset = () => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({ type: MoviesActionTypes.RESET });
  };
};

function getCorrectUrlForFetchingMovies(
  title: string,
  year: string,
  plot: string
): string {
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
}

function sortAscendingFunc(firstParam: Movie, secondParam: Movie): number {
  return firstParam.Title < secondParam.Title
    ? -1
    : firstParam.Title > secondParam.Title
    ? 1
    : 0;
}

function sortDescendingFunc(firstParam: Movie, secondParam: Movie): number {
  return firstParam.Title < secondParam.Title
    ? 1
    : firstParam.Title > secondParam.Title
    ? -1
    : 0;
}

function sortMovies(movies: Movie[], isSortingDescending: boolean): Movie[] {
  let sortedMovies: Movie[];
  if (isSortingDescending) {
    sortedMovies = Array.from(movies).sort(sortDescendingFunc);
  } else {
    sortedMovies = Array.from(movies).sort(sortAscendingFunc);
  }
  return sortedMovies;
}
