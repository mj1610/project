import React from 'react';
import '../Components/LogIn.css';

const LogIn = () => {
    return (
        <div className="login">
            <h2>Sign up here for login</h2>
            <form className="form">
                <label className="label">Enter Name: </label>
                <input type="text"
                    required
                />
                <br/>
                <br/>
                <label className="label">Enter e-mail: </label>
                <input type="email"
                    required
                />
                <br/>
                <br/>  
                <label className="label">Gender: </label>
                <select required>
                    <option value="Select" selected required></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select> 
                <br/>
                <br/>
                <button className= "btn">Submit</button>
            </form>
        </div>
    );
};

export default LogIn;