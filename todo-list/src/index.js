import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const appRender = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

appRender();
