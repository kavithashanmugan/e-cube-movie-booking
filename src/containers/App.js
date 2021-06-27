import NavBar from '../components/Navbar/Navbar'
import LatestMovies  from '../components/LatestMovies/LatestMovies';
import Button from '../components/LatestMovies/Button';
import './App.css';
import Container from '@material-ui/core/Container';
import Loading from '../components/LatestMovies/Loading';
import  ListItem from '../components/LatestMovies/ListItem';
import SwipeableTextMobileStepper from '../components/carousel/carousel';
import SingleLineGridList from '../components/LatestMovies/Card';
import Home from '../components/Home/Home';
import Grid from '@material-ui/core/Grid';
import TrendingMovies from '../components/carousel/Trending'

function App() {
 
  return (
   
    <div className="App">
       <NavBar/>
        <Container fixed>
        <Loading/>    
          <Home/>
        <TrendingMovies/>
          
  
    {/* <SwipeableTextMobileStepper tutorialSteps={tutorialSteps}/> */}
    <SingleLineGridList/>
    </Container>

    </div>
  );
}

export default App;
