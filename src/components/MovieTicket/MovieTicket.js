import React from 'react';
import moment from 'react-moment'
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import Container from '@material-ui/core/Container';


class MovieTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    static getDerivedStateFromProps(props) {
        //const { params } = props.location.state;
       // console.log("params....",props.location.state)
        return {
          id:props.location.state.movieId,
          title: props.location.state.title,
          selectedDate: props.location.state.selectedDate,
          selectedShowTiming: props.location.state.selectedShowTiming,
          selectedSeats: props.location.state.selectedSeats
        };
      }
    render(){
        console.log("propssss is",this.props)
        let selectedSeats = this.state.selectedSeats;
        console.log("selected seats",selectedSeats)
    return (
        <Container>
           <h1>Movie Booked!</h1> 
           <p><b>Movie Name:{this.state.title}</b></p>
           <p><b>Show timing:{this.state.selectedShowTiming}</b></p>
           <p><b>Seats:
           <ol>
      {selectedSeats.map((data) => (
          <div>
        <li >{data}</li>
        </div>
      ))}
    </ol>
    </b>
    </p>
          <p><b>selectedDate: {this.state.selectedDate}</b></p>
          <h3>Scan QR Code at entrance of cinema hall</h3>
          <QRCode
            level="Q"
            style={{ width: 256,height:256 }}
            value={JSON.stringify({
              id: this.state.id,
              MovieName: this.state.title,
              Seats: this.state.selectedSeats,
              showDate:this.state.selectedShowTiming,
              selectedShowTiming: this.state.selectedShowTiming
            })}
          />
          
        

        </Container>
    )
}
}

export default MovieTicket
