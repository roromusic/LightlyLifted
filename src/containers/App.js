import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from '../components/Footer';

import 'typeface-lato';
import '../css/Main.css';

class App extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;