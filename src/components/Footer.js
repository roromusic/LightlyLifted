import React from 'react';
import logo from '../images/LightlyLifted_Brand_Mark-Black.png';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: "#FFCB4E",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img src={logo} 
                 alt="brand logo" 
                 style={{
                     height: "80%"
                 }}
            />
        </footer>
    )
}

export default Footer;