import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import './Album.css';

class Album extends Component {
	constructor(props){
		super(props);

		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug

    });

		this.state = {
			album: album,
			currentSong: album.songs[0],
			hoveredSong: album.songs[0],
			currentTime: 0,
			currentVolume: .5,
			duration: album.songs[0].duration,
			isPlaying: false,
			isHover: false

		};

			this.audioElement = document.createElement('audio');
		  this.audioElement.src = album.songs[0].audioSrc;

	}
		play() {
			this.audioElement.play();
			this.setState({isPlaying:true});
		}

		pause() {
			this.audioElement.pause();
			this.setState({isPlaying:false});
		}

		componentDidMount() {
			this.eventListeners = {
        timeupdate: e => {
          this.setState({currentTime: this.audioElement.currentTime});
        },
        durationchange: e => {
          this.setState({duration: this.audioElement.duration});
        },
				volumechange: e => {
          this.setState({currentVolume: this.audioElement.volume});
        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
			this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
		}

		componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
			this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
    }

		setSong(song) {
			this.audioElement.src = song.audioSrc;
			this.setState({currentSong: song});
		}

		handleSongClick(song) {
			const isSameSong = this.state.currentSong === song;
			if (this.state.isPlaying && isSameSong) {
				this.pause();
			}
			else {
				if (!isSameSong) {this.setSong(song);}
				this.play();
			}
		}

		handleSongHover(song) {
			this.setState({isHover: true});
			this.setState({hoveredSong: song});
		}

		handleSongLeave(song) {
			this.setState({isHover: false});
		}

		produceHoverEffect(song, index) {
			if (!this.state.isPlaying && this.state.isHover && this.state.hoveredSong === song) {return <span style={{display: 'table-cell'}} className="ion-md-play"></span>}
			else if (this.state.isPlaying && !this.state.isHover && this.state.currentSong === song) {return <span style={{display: 'table-cell'}} className="ion-md-pause"></span>}
			else if (this.state.isPlaying && this.state.isHover && this.state.currentSong === song) {return <span style={{display: 'table-cell'}} className="ion-md-pause"></span>}
			else {return <span style={{display: 'table-cell'}}>{index+1}</span> }
		}

		handlePrevClick() {
			const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
			const newIndex = Math.max(0, currentIndex - 1);
			const newSong = this.state.album.songs[newIndex];
			this.setSong(newSong);
			this.play();
    }

		handleNextClick() {
			const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
			const newIndex = Math.min(4, currentIndex + 1);
			const newSong = this.state.album.songs[newIndex];
			this.setSong(newSong);
			this.play();
		}

		handleTimeChange(e) {
      const newTime = this.audioElement.duration * e.target.value;
      this.audioElement.currentTime = newTime;
      this.setState({currentTime: newTime});
    }

		handleVolumeChange(e) {
			const newVolume = e.target.value;
			this.audioElement.volume = newVolume;
			this.setState({currentVolume: newVolume});
		}

		formatTime(seconds) {
			const secondsRounded = Math.floor(seconds);
			const minutes = (secondsRounded / 60);
			const secondsOverAMinute = secondsRounded % 60;
			var minutesString = minutes.toFixed(2);
			var minutesParts= minutesString.split('.');
			if (secondsRounded === 0) {return "0:00";}
			else if (secondsRounded >= 1 && secondsRounded <= 9) {return "0:0" + secondsRounded.toString();}
			else if (secondsRounded >= 10 && secondsRounded < 60 ) {return "0:" + secondsRounded.toPrecision(2);}
			else if (secondsRounded % 60 === 0) {return minutes.toString() + ":00";}
			else if (secondsRounded > 60 && secondsRounded % 60 !== 0 && secondsOverAMinute < 10) {return minutesParts[0].toString() + ":0" + secondsOverAMinute.toString();}
			else if (secondsRounded > 60 && secondsRounded % 60 !== 0 && secondsOverAMinute >= 10) {return minutesParts[0].toString() + ":" + secondsOverAMinute.toString();}
			else {return "-:--";}
		}

	render() {
		return(
			<div id="top-section" class="container-fluid">
				<div id="top-spacer" class="row">
					<div class="col-lg-3"></div>
					<div class="col-lg-6">
					<section className="album-cover">
					<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
					</section>
					</div>
					<div class="col-lg-3"></div>
				</div>
				<div id="middle-section" class="row">
				<div class="col-lg-3"></div>
					<div class="col-lg-6">
					<section className="album-details">
						<h1 id="album-title">{this.state.album.title}</h1>
						<h2 className="artist">{this.state.album.artist}</h2>
						<div id="release-info">{this.state.album.releaseInfo}</div>
					</section>
					</div>
					<div class="col-lg-3"></div>
				</div>
				<div id="bottom-spacer" class="row">
					<div class="col-lg-4"></div>
					<div class="col-lg-4">
					<section id="song-list">
					<table class="table-hover">
					<tbody>
					{this.state.album.songs.map( (song, index) =>
						 <tr className="song" key={index} onClick={() => this.handleSongClick(song)}>
						 <td id="song-number"style={{display: 'table-cell'}} onMouseEnter={() => this.handleSongHover(song)} onMouseLeave={() => this.handleSongLeave(song)}>{this.produceHoverEffect(song, index)}</td>
						 <td id="song-title" style={{display: 'table-cell'}}>{song.title}</td>
						 <td id="song-duration" style={{display: 'table-cell'}}>{this.formatTime(song.duration)}</td>
								</tr>
					)}
					</tbody>
					</table>
					</section>
					<div id="table-right" class="col-lg-4"></div>
					</div>
				</div>
				<div id="bottom-section" class="row">
					<div class="col-12">
					<section id="player-background">
					<PlayerBar
						isPlaying={this.state.isPlaying}
						currentSong={this.state.currentSong}
						currentTime={this.audioElement.currentTime}
						duration={this.audioElement.duration}
						currentVolume={this.state.currentVolume}
						formatTime={(seconds) => this.formatTime(seconds)}
						handleSongClick={() => this.handleSongClick(this.state.currentSong)}
						handlePrevClick={() => this.handlePrevClick()}
						handleNextClick={() => this.handleNextClick()}
						handleTimeChange={(e) => this.handleTimeChange(e)}
						handleVolumeChange={(e) => this.handleVolumeChange(e)}
					/>
					</section>
					</div>
				</div>


			</div>

		)
	}
}

export default Album;
