import React from "react";
import './Navbar.css'
import logo from './e-cube-logo.jpg';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";


class NavBar extends React.Component {
  render() {
    return (
      
        <div>
            <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/">
                    <a className="navbar-brand logoText"> <span><img className="logoImg" src={logo}/>Cube Movies </span> </a>
                    </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                   
                    <div className="searchBar">
                        <form id="inner_search_form">
                    <input type="text" placeholder="Search for latest movies,tv shows"/>
                    
                    </form>
                </div>
                    </div>
                
               
                </div>
                </nav>
            </header>
            
        </div>
       
    );
  }
}

export default NavBar;