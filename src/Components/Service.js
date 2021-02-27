import React from 'react';
import "./Service.css";
import Dropdown from './Dropdown';

const Service = () => {
    function handleClick(){

    }
    return (
        <div className="service">
            {/* <Dropdown/> */}
            <h1>Services</h1>
            <div className="block">
                <div className="HTML">
                    HTML
                </div >
                <div className="HTML">
                    CSS
                </div>
                <div className="HTML">
                    JavaScript
                </div>
                <div className="HTML">
                    REACT
                </div>
            </div>
            <div className="block">
                <div className="HTML">
                    Redux
                </div >
                <div className="HTML">
                    CSS
                </div>
                <div className="HTML">
                    JavaScript
                </div>
                <div className="HTML">
                    REACT
                </div>
            </div>
            <div className="block">
                <div className="HTML">
                    HTML
                </div >
                <div className="HTML">
                    CSS
                </div>
                <div className="HTML">
                    JavaScript
                </div>
                <div className="HTML">
                    REACT
                </div>
            </div>
        </div>
    );
};

export default Service;