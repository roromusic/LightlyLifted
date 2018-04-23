import React from 'react';
import logo from '../images/Brand_Icon-Yellow.png';
import '../css/Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="header_logo">
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
};

export default Header;