import React from "react";
import { getLatestMovies } from "../../actions";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';



class LatestMovies extends React.Component {
  componentDidMount() {
    this.props.getLatestMovies()
  }

  list = (x, i) => {
    <div key={i}>
      <h1>{x.overview}</h1>
      <h1>{x.title}</h1>
      <h1>{x.vote_count}</h1>
      <h1>{x.vote_Count}</h1>
    </div>;
  };
  
  render() {
      const { movies } = this.props
     // console.log("moviessss,",this.props)
      //const movies = this.props.movies;
    // let list = movies.map((x,i)=>{ (
    //  <div key={i}>
    //  <h1>{x.vote_Count}</h1>

    //  </div>
    //  )})
//    return<h1>Good</h1>
if (!_.isEmpty(this.props.movies)) {
     return(movies.map((x,i)=>(<div key={i}>

      <h1>{x.overview}</h1>
      <h1>{x.title}</h1>
      <h1>{x.vote_count}</h1>
      <h1>{x.vote_Count}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`}/>
     </div>))
     )}
     else{
        return <h1>Loading</h1>;
    }
}
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => ({getLatestMovies:()=>dispatch(getLatestMovies())})
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getLatestMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);