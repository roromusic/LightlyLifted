import React from 'react';
import '../css/Home1.css';
import Button from './Button';
import headerImage from '../images/Header.png';

const Home1 = (props) => {
    return (
        <section className="home1">
            <div className="home1_wrapper wrapper">
                <div className="home1_content content">
                    <div className="home1_image">
                        <img className="headerImage" src={headerImage} alt="bottle image" />
                    </div>
                    <div className="home1_text">
                        <h1>Calm your mind.<br/>Don't Lose it.</h1>
                        <Button text="Get Lightly Lifted" scrollToBottom = {props.scrollToBottom} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home1;