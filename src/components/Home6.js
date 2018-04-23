import React from 'react';
import SignUp from './SignUp';

import '../css/Home6.css';

const Home6 = () => {
    return (
        <section className="home6">
            <div className="home6_wrapper wrapper">
                <div className="home6_content content">
                    <h2 className="home6_header">Questions? Comments? Recipes?</h2>
                    <p className="home6_p">
                        We’re listening. We’d love to hear how you’re enjoying being Lightly Lifted.
                    </p>
                    <div className="newsletter">
                        <h3 className="newsletter_header">SUBSCRIBE TO THE NEWSLETTER</h3>
                        <p className="newsletter_p">
                            Lightly Lifted is coming soon to a dispensary near you! 
                            <br/> 
                            Be the first to find out!
                        </p>
                        <SignUp />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home6;