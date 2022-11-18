import React from 'react';
import ReactDOM from 'react-dom/client'; //importing ReactDOM object from the react-dom library.
//ReactDOM object is not object we created; that is an object created by React team

import './index.css';
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root')); //"render" is from HTML. Here, we use an HTML code in Javascript.
root.render(
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
 
);

// Also, <App /> is a HTML element.
