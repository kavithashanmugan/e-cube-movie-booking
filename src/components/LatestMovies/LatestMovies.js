import React from "react";
import { getLatestMovies } from "../../actions";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import ListItem from "../LatestMovies/ListItem";

import {
  Grid,
  Card,
  Button,
  CardMedia,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";


class LatestMovies extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getLatestMovies();
  }

  render() {
   

    const { movies } = this.props;
console.log("propssss",this.props)
    if (!_.isEmpty(this.props.movies)) {
      return (
        <div className={{"flexGrow":"1"}}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {movies.map((x, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                      <CardActionArea>

                <Card>
                <CardMedia
          component="img"
                  src={`https://image.tmdb.org/t/p/w500/${x.backdrop_path}`}
                  width="150"
                  height="250"
                />
                <Typography gutterBottom variant="h5" component="h2">
                {x.title}
          </Typography>
          <Link to={{pathname:`/movie/${x.id}`,state: { params: { title: x.title, release: x.release_date, image: x.backdrop_path,  ratings: x.vote_average, overview: x.overview, id: x.id } }}}> <Button style={{fontWeight:"bold",fontSize:"15px",color:"green"}}>Book Now</Button>  </Link>
                </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const mapStateToProps = (state) => ({ movies: state.movies });
const mapDispatchToProps = (dispatch) => ({
  getLatestMovies: () => dispatch(getLatestMovies()),
});
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getLatestMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);
