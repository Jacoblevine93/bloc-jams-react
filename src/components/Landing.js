import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => (
  <div id="landing" class="container-fluid">
    <div id="top-landing-spacer" class="row">
    <div class="col-lg-12">
    </div>
    </div>

    <div id="main-titles" class="row">
    <div class="col-lg-12">
    <h1 className="main-title">Bloc Jams</h1>
    <h1 className="hero-title">Turn the music up!</h1>
    </div>
    </div>

    <div id="selling-points" class="row">
    <div class="col-lg-12">
    <div className="point">
      <h2 className="point-title">Choose your music</h2>
      <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
    </div>
    <div className="point">
      <h2 className="point-title">Unlimited, streaming, ad-free</h2>
      <p className="point-description">No arbitrary limits. No distractions.</p>
    </div>
    <div className="point">
      <h2 className="point-title">Mobile enabled</h2>
      <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    </div>
    </div>
    </div>

    <div id="bottom-landing-spacer" class="row">
    <div class="col-lg-12">
      <Link to='/library'><button class="btn">See Library</button></Link>
    </div>
    </div>












    </div>

);

export default Landing;
