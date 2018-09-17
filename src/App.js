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
          <nav>
            <Link to="/">Home</Link>
            <Link to='/library'>Library</Link>
          </nav>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>

        <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
          </li>
       </ul>
       </nav>

      </div>
    );
  }
}

export default App;
