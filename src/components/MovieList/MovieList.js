import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';

class MovieList extends Component {
  state = {
    movieList: [],
    searchTerm: '',
  };

  search = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=bb58884b&s=${this.state.searchTerm}&plot=full`,
      )
      .then((res) => res.data)
      .then((res) => {
        const movieList = res.Search.map((movie) => movie.imdbID);
        this.setState({
          movieList,
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  };

  render() {
    const { movieList } = this.state;

    return (
      <div>
        <form onSubmit={this.search}>
          <input
            placeholder="Search for a movie"
            onChange={this.handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        {movieList.length > 0 ? (
          movieList.map((id) => <MovieCard movieID={id} key={id}></MovieCard>)
        ) : (
          <p>Nao encontrou dados</p>
        )}
      </div>
    );
  }
}

export default MovieList;
