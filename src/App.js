import React, { Component } from 'react';
import './App.css';
import FilmListings from './FilmListing';
import FilmDetails from './FilmDetails';


class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListings />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
