import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <h2>{"<"} Kevin {"&"} <span className="orange-text">
                    <strong>CARFA
                    <sub className="carfax-x">X</sub>
                    </strong>
                </span>{"/>"}
            </h2>
        </div>
    );
}

export default Header;