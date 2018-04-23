import React from 'react';
import '../css/Home3.css';
import poolImage from '../images/Pool.jpg';

const Home3 = () => {
    return (
        <section className="home3">
            <div className="home3_wrapper wrapper">
                <div className="home3_content content">
                    <div className="home3_text">
                        <h2 className="home3_header">Relaxation that doesn't feel like excess</h2>
                        <p className="home3_p">
                            We looked (and looked) for an easy way to responsibly relax with cannabis but couldn’t find it. What we saw was either a new device to plug in, a sugary edible, or something far too strong.
                        </p>
                        <p className="home3_p">
                            So we crafted our own low dose combo that we bring with us to unwind and reconnect with each other without feeling overpowered. Our bubbly grapefruit fizz is a refreshing alternative that’s perfect at around the house or out and about. 
                        </p>
                        <p className="home3_p">
                            Start sipping and in less than 30 minutes, you’re on your way to your lift. 
                        </p>
                    </div>
                    <div className="home3_imgContainer">
                        <img className="home3_image" src={poolImage} alt="poolside lightly lifted" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home3;