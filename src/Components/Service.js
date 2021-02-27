import React from 'react';
import "./Service.css";
import Dropdown from './Dropdown';

const Service = () => {
    return (
        <div className="service">
            {/* <Dropdown/> */}
            <h1>Services</h1>
            <div className="block">
            <div>
                HTML
            </div>
            <div>
                CSS
            </div>
            <div>
                JS
            </div>
            <div>
                REACT
            </div>
            </div>

        </div>
    );
};

export default Service;