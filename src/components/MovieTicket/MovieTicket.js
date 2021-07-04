import React from 'react'
// import QRCode from "react-qr-code";
var QRCode = require('qrcode.react');


const MovieTicket = () => {
    return (
        <div>
           <h1>Movie Booked!</h1> 
           <p>Movie Name:<b>The Boss Baby: Family Business</b></p>
           <p><b>Show timing:6:10 pm</b></p>
          <p><b>Selected Seats:seat 1,row D,id 19</b></p>
          <p><b>selectedDate: 2021-07-30</b></p>
          <h3>Scan QR Code at entrance of cinema hall</h3>
           <QRCode
            level="Q"
            style={{ width: 256,height:256 }}
            value={JSON.stringify( {
                "id": 459151,
                "movieId": "fxq7Mqh",
                "title": "The Boss Baby: Family Business",
                "selectedDate": "2021-07-30T06:00:00.000Z",
                "selectedShowTiming": "6:10 PM",
                "selectedSeats": [
                  "Added seat 1,row D,id 19"
                ]
              })}
          />
        

        </div>
    )
}

export default MovieTicket
