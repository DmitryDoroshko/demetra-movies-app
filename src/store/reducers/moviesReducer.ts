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
  movieFetched: null,
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
    case MoviesActionTypes.SORT_MOVIES_DESCENDING:
      return {
        ...state,
        moviesSorted: action.payload,
        sortingDescending: !state.sortingDescending,
      };
    case MoviesActionTypes.SORT_MOVIES_ASCENDING:
      return {
        ...state,
        moviesSorted: action.payload,
        sortingDescending: !state.sortingDescending,
      };
    case MoviesActionTypes.RESET: {
      return initialState;
    }
    case MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        movieFetched: null,
      };
    case MoviesActionTypes.FETCH_SINGLE_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movieFetched: action.payload,
      };
    default:
      return state;
  }
};
