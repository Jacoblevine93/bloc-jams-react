import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
      <style>{'body { background-color: #181818; }'}</style>
      </Helmet>
        <header>
        <nav class="navbar navbar-expand-md navbar-dark justify-content-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/library'>Library</Link>
            </li>
          </ul>
        </div>
      </nav>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
