import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Scout from './scout';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// Example API call using Scout SDK.
Scout.init();
