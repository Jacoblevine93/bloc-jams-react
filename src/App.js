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
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
            <Link to="/">Home</Link>
            <Link to='/library'>Library</Link>
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
