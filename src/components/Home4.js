import React from 'react';
import '../css/Home4.css';
import bottle from '../images/Bottle.png';
import check from '../images/check-square.svg';

const Home4 = () => {
    return (
        <section className="home4">
            <div className="home4_wrapper wrapper">
                <div className="home4_content content">
                    <h2 className="home4_header">Why 7?</h2>
                    <p className="home4_p">
                        Just like caffeine or alcohol, your body’s reaction to cannabis ingredients (THC and CBD) is going to be unique. We always want Lightly Lifted to be a fun, positive experience. Here are some tips for finding what’s right for you:
                    </p>
                    <div className="tips">
                        <ul className="tips_list">
                            <img className="check_image" src={check} alt="check" />
                            <li>7mg THC / 7mg CBD(a whole bottle) is people looking for a more heightened experienced, those who taller/bigger, or generally have greater tolerance for cannabis.</li>
                            <img className="check_image" src={check} alt="check" />
                            <li>3.5 mg THC / 3.5mg CBD (half a bottle), is a great way to experience your first time and may be enough every time. A good reason to go splitsies with a friend. </li>
                            <img className="check_image" src={check} alt="check" />
                            <li>Wait for <span className="bold">two hours for full effect.</span> This is your chance to not be in a rush, take it to heart.  
</li>
                        </ul>
                        <div className="tips_image">
                            <img className="tips_bottle" src={bottle} alt="bottle image" />
                        </div>
                    </div>
                    <p className="home4_p">
                        We are aiming for a light enjoyable high for most people; we take no responsibility for exceeding our go-slow recommendation.  Please, Tread Lightly.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home4;