import NavBar from '../components/Navbar/Navbar'
import LatestMovies  from '../components/LatestMovies/LatestMovies';
import Button from '../components/LatestMovies/Button';
import './App.css';
import Container from '@material-ui/core/Container';
import Loading from '../components/LatestMovies/Loading';
import  ListItem from '../components/LatestMovies/ListItem';


function App() {
  return (
    <div className="App">
       <NavBar/>
        <Container fixed>
          <Loading/>
          <LatestMovies/>
     {/* <Button/> */}
    {/* <ListItem/> */}
    </Container>
    </div>
  );
}

export default App;
