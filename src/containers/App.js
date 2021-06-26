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
  const tutorialSteps = [
    {
      label: 'SAN FRANCISCO-SAN – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'GOA, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
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
