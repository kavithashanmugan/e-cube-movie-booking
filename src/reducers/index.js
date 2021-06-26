const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_LATEST_MOVIES":
      return { ...state, isLoading: true };
    case "LATEST_MOVIES_RECEIVED":
      return {
        ...state,
        movies: action.latestMovies.results,
        isLoading: false,
      };
    case "GET_POPULAR_MOVIES":
      return { ...state, isLoading: true };
    case "POPULAR_MOVIES_RECEIVED":
      return {
        ...state,
        popularmovies: action.popularMovies.results,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
