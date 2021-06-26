import React from "react";
import { getTopRatedMovies } from "../../actions";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  SwipeableTextMobileStepper from '../carousel/carousel';
import Container from '@material-ui/core/Container';

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


class TrendingMovies extends React.Component {
  componentDidMount() {
    this.props.getTopRatedMovies();
  }

  render() {
   
console.log("hellllooo top rated",this.props)
    const { topRatedMovies } = this.props;

    if (!_.isEmpty(this.props.topRatedMovies)) {
      return (
          <Container>
        <SwipeableTextMobileStepper tutorialSteps={this.props.topRatedMovies}/>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
