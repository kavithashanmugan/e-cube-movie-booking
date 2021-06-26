import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { getLatestMovies} from '../../actions';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

let AlignItemsList=(movies)=>(
    movies ?  movies.map((movie,index)=> {
  return(
      <div key={index}>
          <h1>{movie.title}</h1>
      </div>
  )
    })
    :null);

const mapStateToProps = (state)=>(
    {
        movies: state.movies
    }
)
const mapDispatchToProps = {
    getLatestMovies : getLatestMovies
}

AlignItemsList = connect(mapStateToProps,mapDispatchToProps)(AlignItemsList);

export default AlignItemsList;