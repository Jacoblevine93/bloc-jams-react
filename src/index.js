import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, RouteHandler, Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';


ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
   , document.getElementById('root'));
 registerServiceWorker();
