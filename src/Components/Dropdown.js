import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div onClick={handleClick} className={ click ? 'dropdown-menu clicked' : 'dropdown-menu' } >
            <Link to="/course">Course</Link>
                <Link to="/write">Write</Link>    
                <Link to="/suggestion">Suggestion</Link>
                <Link to="/logics">Logics</Link>
        </div>
    );
};

export default Dropdown;