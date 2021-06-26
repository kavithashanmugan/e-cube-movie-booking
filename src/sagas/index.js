import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';


// function* fetchNews() {
//   const json = yield fetch('https://ngapi4.herokuapp.com/api/getProducts')
//         .then(response => response.json(), );    
//   yield put({ type: "NEWS_RECEIVED", json: json, });
// }
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
function* actionWatcher() {
     yield takeLatest('GET_LATEST_MOVIES', getLatestMovies)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}