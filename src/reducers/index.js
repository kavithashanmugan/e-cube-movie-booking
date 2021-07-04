const reducer = (state = {isMovieBooked:false}, action) => {
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
      case "GET_TOP_RATED_MOVIES":
      return { ...state, isLoading: true };
    case "TOP_RATED_MOVIES_RECEIVED":
      return {
        ...state,
        topRatedMovies: action.topRatedMovies.results,
        isLoading: false,
      };
      case "BOOK_MOVIES":
      return { ...state, isMovieBooked: false };
    case "MOVIE_BOOKED":
      return {
        ...state,
        isMovieBooked:true
      };
    default:
      return state;
  }
};

export default reducer;
