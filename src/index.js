import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
    <App game = "GTA" status="100"/> 
    <App game = "ConterStrike" status="78"/>
    <App game = "HL" status="97" />

                </div>, document.getElementById('root'));

serviceWorker.unregister();
