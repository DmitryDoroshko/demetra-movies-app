export type Movie = {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Language?: string;
    Country?: string;
};

export interface MoviesState {
    movies: Movie[];
    moviesSorted: Movie[] | null;
    loading: boolean;
    error: null | string;
    sortingDescending: boolean;
    movieFetched: Movie | null;
}
export enum MoviesActionTypes {
    FETCH_MOVIES = "FETCH_MOVIES",
    FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    FETCH_SINGLE_MOVIE_BY_ID = "FETCH_SINGLE_MOVIE_BY_ID",
    FETCH_SINGLE_MOVIE_BY_ID_SUCCESS = "FETCH_SINGLE_MOVIE_BY_ID_SUCCESS",
    FETCH_SINGLE_MOVIE_BY_ID_ERROR = "FETCH_SINGLE_MOVIE_BY_ID_ERROR",
    SORT_MOVIES_ASCENDING = "SORT_MOVIES_ASCENDING",
    SORT_MOVIES_DESCENDING = "SORT_MOVIES_DESCENDING",
    RESET = "RESET",
}

interface FetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
    payload: Movie[];
}

interface FetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}

interface SortMoviesAscending {
    type: MoviesActionTypes.SORT_MOVIES_ASCENDING;
    payload: Movie[];
}

interface SortMoviesDescending {
    type: MoviesActionTypes.SORT_MOVIES_DESCENDING;
    payload: Movie[];
}

interface Reset {
    type: MoviesActionTypes.RESET;
}

interface FetchSingleMovieById {
    type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID;
}
interface FetchSingleMovieByIdSuccess {
    type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_SUCCESS;
    payload: Movie;
}
interface FetchSingleMovieByIdError {
    type: MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_ERROR;
    payload: string;
}

export type MoviesAction =
    | FetchMoviesAction
    | FetchMoviesSuccessAction
    | FetchMoviesErrorAction
    | SortMoviesAscending
    | SortMoviesDescending
    | Reset
    | FetchSingleMovieById
    | FetchSingleMovieByIdSuccess
    | FetchSingleMovieByIdError;
