import React from "react";
import { getTopRatedMovies } from "../../actions";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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


class TopRatedMovies extends React.Component {
  componentDidMount() {
    this.props.getTopRatedMovies();
  }

  render() {
   
console.log("hellllooo top rated",this.props)
    const { topRatedMovies } = this.props;
// return<h1>Popular</h1>
    if (!_.isEmpty(this.props.topRatedMovies)) {
      return (
        <div className={{"flexGrow":"1"}}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {topRatedMovies.map((x, i) => (
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
     
                <Button style={{fontWeight:"bold",fontSize:"15px",color:"green"}}>Book Now</Button>
             
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

const mapStateToProps = (state) => ({ topRatedMovies: state.topRatedMovies });
const mapDispatchToProps = (dispatch) => ({
  getTopRatedMovies: () => dispatch(getTopRatedMovies()),
});
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getPopularMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);
