import NavBar from '../components/Navbar/Navbar'
import LatestMovies  from '../components/LatestMovies/LatestMovies';
import Button from '../components/LatestMovies/Button';
import Container from '@material-ui/core/Container';
import Loading from '../components/LatestMovies/Loading';
import  ListItem from '../components/LatestMovies/ListItem';
import SwipeableTextMobileStepper from '../components/carousel/carousel';
// import SingleLineGridList from '../components/LatestMovies/Card';
import Home from '../components/Home/Home';
import Grid from '@material-ui/core/Grid';
import Main from '../Main/Main';
import TrendingMovies from '../components/carousel/Trending'
import { Router, Switch, Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieTicket from '../components/MovieTicket/MovieTicket';
import history from './history'

function App() {
 
  return (
    
    <Router history={history}>
    <div>
    <NavBar/>
    <Route exact path='/' component={Main}/>
    <Route exact path='/movie/:id' component={MovieDetails}/>
    <Route exact path='/movieticket/:movieId' component={MovieTicket}/>
    </div>
    </Router>
  );
}

export default App;
