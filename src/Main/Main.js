import NavBar from '../components/Navbar/Navbar'
import LatestMovies  from '../components/LatestMovies/LatestMovies';
import Button from '../components/LatestMovies/Button';
import './Main.css';
import Container from '@material-ui/core/Container';
import Loading from '../components/LatestMovies/Loading';
import  ListItem from '../components/LatestMovies/ListItem';
import SwipeableTextMobileStepper from '../components/carousel/carousel';
import SingleLineGridList from '../components/LatestMovies/Card';
import Home from '../components/Home/Home';
import Grid from '@material-ui/core/Grid';
import TrendingMovies from '../components/carousel/Trending'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
    
        <Container fixed>
          
        <Loading/>    
          <Home/>
        <TrendingMovies/>
    </Container>
    </div>
  );
}

export default Main;
