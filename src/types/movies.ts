export type Movie = {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
};

export interface MoviesState {
    movies: Movie[];
    moviesSorted: Movie[] | null;
    loading: boolean;
    error: null | string;
    sortingDescending: boolean;
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
