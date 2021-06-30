import React from "react";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import MediaControlCard from './MovieCard';
import Container from '@material-ui/core/Container';


class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

 
  static getDerivedStateFromProps(props) {
    const { params } = props.location.state;
    return {
      title: params.title,
      image: params.image,
      release: params.release,
      ratings: params.ratings,
    };
  }
  render() {
      console.log("some",this.state)
    return (
    
      <Container>
          <Link to="/" className="btn bg-info text-light mb-2 btn-sm">
          <i className="fa fa-arrow-left" /> Back To Search
        </Link>
          <MediaControlCard props={this.state}/>
     
      
        
      </Container>
    );
  }
}

export default MovieDetails;
