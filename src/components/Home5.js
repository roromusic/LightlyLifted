import React from 'react';
import '../css/Home5.css';
import check from '../images/check-square.svg';

const Home5 = () => {
    return (
        <section className="home5">
            <div className="home5_wrapper wrapper">
                <div className="home5_content content">
                    <h2 className="home5_header">We care about this stuff</h2>
                    <p className="home5_p">
                        Every bottle of Lightly Lifted is made in a small batch with only California-grown cannabis. It is lab tested for quality and consistency, so you always get:
                    </p>
                    <ul className="home5_list">
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item1">1:1 ratio of THC to CBD (7mg THC / 7mg CBD)</li>
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item2">All-natural ingredients</li>
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item3">Less than 50 calories per bottle</li>
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item4">No gluten, dairy, nuts, artificial colors, or sweeteners</li>
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item5">No weed taste</li>
                        <img className="check_image" src={check} alt="check" />
                        <li className="home5_item6">The best San Francisco has to offer</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home5;