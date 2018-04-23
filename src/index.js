import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LightlyLifted from './containers/LightlyLifted';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LightlyLifted />, document.getElementById('root'));
registerServiceWorker();
