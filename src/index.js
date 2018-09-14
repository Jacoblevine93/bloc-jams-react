import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';


ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
   , document.getElementById('root'));
 registerServiceWorker();
