import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';



//GET LATEST MOVIES
function* getLatestMovies(){
  function getLatestMoviesApi() {
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
function* actionWatcher() {
     yield takeLatest('GET_LATEST_MOVIES', getLatestMovies)
     yield takeLatest('GET_POPULAR_MOVIES',getPopularMovies)
     yield takeLatest('GET_TOP_RATED_MOVIES',getTopRatedMovies)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}