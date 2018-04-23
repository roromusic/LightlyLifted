import React, { Component } from 'react';
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Home3 from '../components/Home3';
import Home4 from '../components/Home4';
import Home5 from '../components/Home5';
import Home6 from '../components/Home6';

class Home extends Component {
    constructor(props){
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        this.end.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="home">
                <Home1 scrollToBottom = {this.scrollToBottom} />
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
                <div ref={(el) => { this.end = el; }}></div>
            </div>
        )
    }
}

export default Home;