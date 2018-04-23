import React from 'react';
import '../css/Button.css';

const Button = (props) => {
    const text = props.text;

    return (
        <button className="button" onClick={props.scrollToBottom}>
            {text}
        </button>
    );
}

export default Button;