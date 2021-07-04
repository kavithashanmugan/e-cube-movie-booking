import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
// import MovieTicket from '../MovieTicket/MovieTicket';
import Rating from 'react-simple-star-rating'
import SeatPicker from 'react-seat-picker'




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: 100,
    fontSize: 15,
    paddingBottom: 5,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    height: 350,
  },
}));

export default function MediaControlCard(props) {
   
  const classes = useStyles();
  const theme = useTheme();
  const converted = (props.props.ratings * 5 )/10;

  return (
    <Container>
         <Typography component="h1" variant="h1">
             <hr></hr>
            Book Your Movie
            <hr></hr>
            </Typography>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${props.props.image}`}
          title="Live from space album cover"
          width="25"
          height="25"
        />
        <div className={classes.details}>
          <CardContent>
            <Typography component="h2" variant="h2">
              {props.props.title}
            </Typography>
            <Typography variant="h3" color="textSecondary" >
              {props.props.release}
            </Typography>
            <Typography variant="h4" style={{"paddingBottom":"25"}}>
            
           
            <Rating
        ratingValue={converted}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        stars={5} // Will remove the inline style if applied
      />
            
            </Typography>
            <Typography variant="h4" style={{"paddingBottom":"25"}}>{props.props.overview}</Typography>
            <CardActions>
           
            </CardActions>
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}
