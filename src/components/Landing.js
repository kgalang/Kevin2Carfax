import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='/takequiz/'>
                <h3>Click to take quiz</h3>
            </Link>
        </div>
    );
}

export default Landing;