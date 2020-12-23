import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.css';
import reportWebVitals from './reportWebVital';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('kdf__root')
);

reportWebVitals();
