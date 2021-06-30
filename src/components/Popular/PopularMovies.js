import React from "react";
import { getPopularMovies } from "../../actions";
import { BrowserRouter, Route, Link } from "react-router-dom";
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


class PopularMovies extends React.Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  render() {
   
console.log("hellllooo popular",this.props)
    const { popularmovies } = this.props;
// return<h1>Popular</h1>
    if (!_.isEmpty(this.props.popularmovies)) {
      return (
        <div className={{"flexGrow":"1"}}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {popularmovies.map((x, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                      <CardActionArea>

                <Card>
                <CardMedia
          component="img"
                  src={`https://image.tmdb.org/t/p/w500/${x.backdrop_path}`}
                  width="150"
                  height="250"
                  alt={x.title}
                />
                <Typography gutterBottom variant="h5" component="h2">
                {x.title}
          </Typography>
          <Link to={{pathname:`/movie/${x.id}`,state: { params: { title: x.title, release: x.release_date, image: x.backdrop_path,  ratings: x.vote_average } }}}> <Button style={{fontWeight:"bold",fontSize:"15px",color:"green"}}>Book Now</Button>  </Link>
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

const mapStateToProps = (state) => ({ popularmovies: state.popularmovies });
const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: () => dispatch(getPopularMovies()),
});
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getPopularMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
