import NavBar from '../components/Navbar/Navbar'
import LatestMovies  from '../components/LatestMovies/LatestMovies';
import Button from '../components/LatestMovies/Button';
import './App.css';
import Container from '@material-ui/core/Container';
import Loading from '../components/LatestMovies/Loading';
import  ListItem from '../components/LatestMovies/ListItem';
import SwipeableTextMobileStepper from '../components/LatestMovies/Carousel';
import SingleLineGridList from '../components/LatestMovies/Card';
import Home from '../components/Home/Home';
import Grid from '@material-ui/core/Grid';

function App() {
  let arr = ["hello","how","you"]
  return (
   
    <div className="App">
       <NavBar/>
        <Container fixed>
          <Loading/>
          {/* <Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
  <ListItem arr={arr}/>
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <ListItem arr={arr}/>
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <ListItem arr={arr}/>
  </Grid>
</Grid> */}

    {/* <ListItem arr={arr}/> */}
   {/* <LatestMovies/> */}
   <Home/>
    {/* <SwipeableTextMobileStepper/>
    <SingleLineGridList/> */}
    </Container>

    </div>
  );
}

export default App;
