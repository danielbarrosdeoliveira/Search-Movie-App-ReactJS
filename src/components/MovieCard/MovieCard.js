import React, { Component } from 'react';
import axios from 'axios';

class MovieCard extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get(`https://www.omdbapi.com/?i=${this.props.movieID}&apikey=bb58884b`)
      .then((res) => res.data)
      .then((res) => {
        this.setState({ movieData: res });
      });
  }

  render() {
    const { Title, Releasead, Plot, Poster, imdbRating } = this.state.movieData;

    return (
      <div className="movie-card-container">
        <div className="image-container">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${Poster})` }}
          />
        </div>
        <div className="movie-info">
          <h2>Movie Details</h2>
          <div>
            <h1>{Title}</h1>
            <small>Releasead Date: {Releasead}</small>
          </div>
          <h4>Rating: {imdbRating} / 10</h4>
          <p>{Plot && Plot.substr(0, 350)}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
