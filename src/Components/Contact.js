import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            
            <h1>Contact us at</h1>
            <p>ed-place-support@edplace.com</p>
            <form className="form">
            <label>Enter Name: </label>
                <input type="text"></input><br/>
            <label>Enter e-mail: </label>
                <input type="email"></input><br/>
                <label className="query">Write Query: </label>
                <textarea type="textarea"></textarea><br/>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;