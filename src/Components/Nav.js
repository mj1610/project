import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = ({burger}) => {    
    return (
        <nav className="navbar background">
            <span>
            <h3>Ed-Place</h3>
            </span>
            <span className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>    
                <Link to="/contact">Contact</Link>
                <Link to="/service">Service</Link>
            </span>
            <span className="searchbox">
                <input className="search" type="text" placeholder="Search here"></input>            
                <button className="btn">Search</button>
                <Link to="/login">
                <button className="btn">Log In</button>        
                </Link>
            </span>
            <div className="burger" onClick={burger}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        </nav>
    );
};

export default Nav;