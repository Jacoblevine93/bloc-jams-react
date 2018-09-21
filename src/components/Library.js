import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

 class Library extends Component {
   constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }


	render() {
		return (

      <div id="library" class="container-fluid">
        <div id="h1-block" class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
          <h1 className="text-center">Library</h1>
          </div>
          <div class="col-lg-4"></div>
          </div>

      <table class="table-hover">
      <tbody>
      {this.state.albums.map( (album, index) =>
        <Link to={`/album/${album.slug}`} key={index}>
        <tr className="Album-image">
        <td>
          <img class="image" id="album-cover" src={album.albumCover} alt={album.title} />
          <div id="album-title">{album.title}</div>
          <div id="album-artist">{album.artist}</div>
          <div id="album-songs">{album.songs.length} songs</div>
        </td>
        </tr>
        </Link>
      )}

      </tbody>
      </table>
</div>
          )

        }

}

export default Library;
