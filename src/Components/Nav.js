import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <h3>Education Place</h3>
            <div className="links">
                {/* here we are going to use Route Links instead of anchor tag */}
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>    
                <Link to="/contact">Contact</Link>
                <Link to="/service">Service</Link>
            </div>
            <div className="searchbox">
                <input className="search" type="text" placeholder="Search here"></input>     
                <button className="btn">Search</button>
                <Link to="/login">
                <button className="btn">Log In</button>        
                </Link>   
            </div>
        </nav>
    );
};

export default Nav;