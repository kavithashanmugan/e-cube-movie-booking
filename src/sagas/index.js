import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';



//GET LATEST MOVIES
function* getLatestMovies(){
  function getLatestMoviesApi(){
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2ed3d431fad14b46d4f23241678d1d88&language=en-US&page=1')
  .then(function (response) {
    const data = response.data;
    console.log("hello",data)
    return data;
  })
   
  }

  console.log("get latest movies",getLatestMoviesApi())
        let  data  = yield call(getLatestMoviesApi);
   
  yield put({ type: "LATEST_MOVIES_RECEIVED", latestMovies:data });
}

//GET POPULAR MOVIES
function* getPopularMovies(){
  function getPopularMoviesApi() {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2ed3d431fad14b46d4f23241678d1d88&language=en-US&page=1')
  .then(function (response) {
    const data = response.data;
    console.log("hello",data)
    return data;
  })
   
  }

  console.log("get popular movies",getPopularMoviesApi())
        let  data  = yield call(getPopularMoviesApi);
   
  yield put({ type: "POPULAR_MOVIES_RECEIVED", popularMovies:data });
}
function* getTopRatedMovies(){
  function getTopRatedMoviesApi() {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2ed3d431fad14b46d4f23241678d1d88&language=en-US&page=1')
  .then(function (response) {
    const data = response.data;
    console.log("toprated",data)
    return data;
  })
   
  }

  console.log("get TOP RATED movies",getTopRatedMoviesApi())
        let  data  = yield call(getTopRatedMoviesApi);
   
  yield put({ type: "TOP_RATED_MOVIES_RECEIVED", topRatedMovies:data });
}

function* getMovieDetails(action){
  function getMovieDetailsApi(action){
    return axios.get(`https://api.themoviedb.org/3/movie/${action.payload.id}?api_key=2ed3d431fad14b46d4f23241678d1d88&language=en-US`)
  .then(function (response) {
    const data = response.data;
    console.log("getting data",data)
    return data;
  })
  }
  console.log("getting movie details by Id",getMovieDetailsApi(action));
  let data = yield call(getMovieDetailsApi,action);

yield put({ type: "MOVIE_DETAILS_RECEIVED", movieDetails:data });
}

function* bookMovie(action){
  console.log("booking movie hitted")
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...action.payload})
  };
  yield fetch('http://localhost:6700/bookings', requestOptions)
  .then(response => response.json())
  .then(data=>console.log("data is ...",data))
  yield put({type:"MOVIE_BOOKED",  error: false})
}

function* actionWatcher() {
     yield takeLatest('GET_LATEST_MOVIES', getLatestMovies)
     yield takeLatest('GET_POPULAR_MOVIES',getPopularMovies)
     yield takeLatest('GET_TOP_RATED_MOVIES',getTopRatedMovies)
     yield takeEvery('GET_MOVIE_DETAILS',getMovieDetails)
     yield takeLatest('BOOK_MOVIE',bookMovie)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}