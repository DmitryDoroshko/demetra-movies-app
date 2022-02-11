import {
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
                moviesSorted: action.payload,
            };
            
        default:
            return state;
    }
};