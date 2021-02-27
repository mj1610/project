import React, {useState} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import Dropdown from './Dropdown';

const Nav = ({burger,click, Dropdown}) => {  
    
    return (        
        <nav className="navbar">        
            <span>
            <h3>Ed-Place</h3>
            </span>
            <span className="links visibility">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>    
                <Link to="/contact">Contact</Link>
                <Link to="/course">Course<i className="fas fa-caret-down"/></Link>
                    {Dropdown && <Dropdown/>}
                <Link to="/service">Service</Link>
            </span>
            <span className="searchbox visibility">
                <input className="search" type="text" placeholder="Search here"></input>            
                <button className="btn">Search</button>
                <Link to="/login"><button className="btn">Sign Up</button></Link>
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