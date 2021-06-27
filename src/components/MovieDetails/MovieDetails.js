import React from 'react';
import { Link } from "react-router-dom";
const MovieDetails = () => {
    return (
        <div>
            Helllooooo
            <Link to="/" className="btn bg-info text-light mb-2 btn-sm">
            <i className="fa fa-arrow-left" /> Back To Search
          </Link>
        </div>
    )
}

export default MovieDetails
