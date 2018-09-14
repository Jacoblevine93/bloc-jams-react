import React, { Component } from 'react';
import './PlayerBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PlayerBar extends Component {
  render() {
    return (
      <div id="player-bar" class="container-fluid">
  			<div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <section id="buttons">
              <i class="fas fa-step-backward fa-2x" onClick={this.props.handlePrevClick}></i>
              <span onClick={this.props.handleSongClick} className={this.props.isPlaying ? "far fa-pause-circle fa-3x" : "far fa-play-circle fa-3x"}></span>
              <i class="fas fa-step-forward fa-2x" onClick={this.props.handleNextClick}></i>
          </section>
          <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
              />
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>
					</div>
					<div class="col-lg-4">
          <section id="volume-control">
            <i class="fas fa-volume-down fa-1x"></i>
            <input
              type="range"
              className="volume-bar"
              value={this.props.currentVolume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
             />
             <div id="#volumehigh">
             <i class="fas fa-volume-up fa-1x"></i>
              </div>
          </section>
					</div>
          </div>
          </div>
    );
  }
}

export default PlayerBar;
