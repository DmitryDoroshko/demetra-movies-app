import {
    Movie,
    MoviesAction,
    MoviesActionTypes,
    MoviesState,
} from "../../types/movies";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    moviesSorted: [],
    sortingDescending: true,
};

const sortAscendingFunc = (firstParam: Movie, secondParam: Movie): number => {
    return firstParam.Title < secondParam.Title
        ? -1
        : firstParam.Title > secondParam.Title
        ? 1
        : 0;
};

const sortDescendingFunc = (firstParam: Movie, secondParam: Movie): number => {
    return firstParam.Title < secondParam.Title
        ? 1
        : firstParam.Title > secondParam.Title
        ? -1
        : 0;
};

const sortMovies = (movies: Movie[], isSortingDescending: boolean): Movie[] => {
    let sortedMovies: Movie[];
    if (isSortingDescending) {
        sortedMovies = Array.from(movies).sort(sortDescendingFunc);
    } else {
        sortedMovies = Array.from(movies).sort(sortAscendingFunc);
    }
    return sortedMovies;
};

export const moviesReducer = (
    state = initialState,
    action: MoviesAction
): MoviesState => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_MOVIES:
            return {
                ...state,
                loading: true,
                error: null,
                movies: [],
                moviesSorted: [],
            };
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                movies: [],
                moviesSorted: [],
            };
        case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: action.payload,
                moviesSorted: sortMovies(
                    action.payload,
                    state.sortingDescending
                ),
            };

        default:
            return state;
    }
};
