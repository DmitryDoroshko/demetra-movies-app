type Movie = {
    title: string;
    year: number;
    imdbRating: number;
    released: string;
    genre: string;
    director: string;
    language: string;
    imdbID: string;
    poster: string;
};

export interface MoviesState {
    movies: Movie[];
    moviesSorted: Movie[] | null;
    loading: boolean;
    error: null | string;
}
export enum MoviesActionTypes {
    FETCH_MOVIES = "FETCH_MOVIES",
    FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    SORT_MOVIES_ASCENDING = "SORT_MOVIES_ASCENDING",
    SORT_MOVIES_DESCENDING = "SORT_MOVIES_DESCENDING",
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

export type MoviesAction =
    | FetchMoviesAction
    | FetchMoviesSuccessAction
    | FetchMoviesErrorAction
    | SortMoviesAscending
    | SortMoviesDescending;
