import React from "react";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import MediaControlCard from './MovieCard';
import Container from '@material-ui/core/Container';
import SeatPicker from 'react-seat-picker';
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import {bookMovie} from '../../actions/index';
import "./MovieDetails.css";
//import randomString  from 'randomString';
var randomstring = require("randomstring");

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        movieId:randomstring.generate(7),
        selectedDate:new Date(),
        selectedShowTiming:'',
        selectedSeats:[]
    
    }

this.selectedDateChange = this.selectedDateChange.bind(this);
this.selectTimeChange = this.selectedTimeChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

  }
  selectedDateChange(data) {
    this.setState({
        selectedDate: data
    }, () => console.log(this.state.selectedDate));
  }

  selectedTimeChange=(event)=>{
    
    this.setState({
        selectedShowTiming: event.target.value
    })
   
  }

  handleSubmit(event) {
    event.preventDefault();
    const {id,movieId, title, selectedDate, selectedShowTiming,selectedSeats} = this.state;
    console.log("handle submit state is",id,title,selectedDate,selectedShowTiming,selectedSeats)
    
    this.props.bookMovie({
        id,
        movieId,
        title,
        selectedDate,
        selectedShowTiming,
        selectedSeats
    })

  }

  static getDerivedStateFromProps(props) {
    const { params } = props.location.state;
    return {
      id:params.id,
      title: params.title,
      image: params.image,
      release: params.release,
      ratings: params.ratings,
      overview:params.overview
    };
  }


  //react seat picker starts here
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(`seat ${number}, row ${row}, id ${id}`)
      const newTooltip = `tooltip for id-${id} added by callback`
      addCb(row, number, id, newTooltip)
      this.setState({ loading: false })
    })
  }
 
  addSeatCallbackContinousCase = ({ row, number, id }, addCb, params, removeCb) => {
    this.setState({
      loading: true
    }, async () => {
      if (removeCb) {
        await new Promise(resolve => setTimeout(resolve, 750))
        console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`)
        removeCb(params.row, params.number)
      }
      await new Promise(resolve => setTimeout(resolve, 750))
      console.log(`Added seat ${number}, row ${row}, id ${id}`)
      const newTooltip = `tooltip for id-${id} added by callback`
      addCb(row, number, id, newTooltip)
      this.setState({ loading: false })
      this.setState({ selectedSeats: [...this.state.selectedSeats,`Added seat ${number},row ${row},id ${id}` ]})
    })
  }
 
  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(`Removed seat ${number}, row ${row}, id ${id}`)
      // A value of null will reset the tooltip to the original while '' will hide the tooltip
      const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
      removeCb(row, number, newTooltip)
      this.setState({ loading: false })
    })
  }
  render() {
   
     console.log("propssss",this.props)
      if (this.props.isMovieBooked) {
        console.log("som successe",this.state)
        return <div className="register-success">Movie Booked  
        <ul>
            <li><Link to="/">Go Back To Movies</Link></li>
            <li><Link to ={{pathname:`/movieticket/${this.state.movieId}`}}>view Ticket</Link></li>
        </ul>
    </div>
      }else{
        console.log("some state",this.state)
      const rows = [
        [{id: 1, number: 1, isSelected: true, tooltip: 'Reserved by you'}, {id: 2, number: 2, tooltip: 'Cost: 15$'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Rogger'}, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}],
        [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved by Matthias Nadler'}, {id: 8, number: 2, isReserved: true}, null, {id: 9, number: '3', isReserved: true, orientation: 'east'}, {id: 10, number: '4', orientation: 'west'}, null, {id: 11, number: 5}, {id: 12, number: 6}],
        [{id: 13, number: 1}, {id: 14, number: 2}, null, {id: 15, number: 3, isReserved: true, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6}],
        [{id: 19, number: 1, tooltip: 'Cost: 25$'}, {id: 20, number: 2}, null, {id: 21, number: 3, orientation: 'east'}, {id: 22, number: '4', orientation: 'west'}, null, {id: 23, number: 5}, {id: 24, number: 6}],
        [{id: 25, number: 1, isReserved: true}, {id: 26, number: 2, orientation: 'east'}, null, {id: 27, number: '3', isReserved: true}, {id: 28, number: '4', orientation: 'west'}, null,{id: 29, number: 5, tooltip: 'Cost: 11$'}, {id: 30, number: 6, isReserved: true}]
      ]

      //const showTimings = []
      const {loading} = this.state
    return (
    
      <Container>
         
          <Link to="/" className="btn bg-info text-light mb-5 pb-5 btn-sm">
          <i className="fa fa-arrow-left" /> Back To Search
        </Link>
        <form onSubmit={this.handleSubmit}>
        <div>
           
          <MediaControlCard props={this.state}/>
          <div className="input-container">
            <h1>Select Date</h1>
            <div>
      <DatePicker
        onChange={(date)=>this.selectedDateChange(date)}
        value={this.state.selectedDate}
      />
    </div>
            </div>
          </div>
         
          <div>
            
            {/* <div className="input-container">
            <h1>Select Date</h1>
            <div>
      <DatePicker
        onChange={(date)=>this.selectedDateChange(date)}
        value={this.state.selectedDate}
      />
    </div>
            </div> */}
            <h1>Select Timings</h1>
            <div>

            <div >
        <input type="radio" value="8:30 AM" name="gender" onChange={this.selectedTimeChange} /> 8:30 AM
        <input type="radio" value="12:30 PM" name="gender" onChange={this.selectedTimeChange}/> 12:30 PM
        <input type="radio" value="3:15 PM" name="gender" onChange={this.selectedTimeChange} /> 3:15 PM
        <input type="radio" value="6:10 PM" name="gender" onChange={this.selectedTimeChange} /> 6:10 PM
      </div>

            </div>
      
        <h1>Select your seat</h1>
        <div style={{ marginTop: '100px' }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>
      </div>
      <hr></hr>
      <button  className="btn first" type="submit" >Submit</button>
    
      </form>
      </Container>
    );
  }
}}

const mapDispatchToProps = {
    bookMovie: bookMovie,
  }
  
  const mapStateToProps = (state) => (
      console.log("state is....",state),
  {
    isMovieBooked: state.isMovieBooked
  })
  //)
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);;
