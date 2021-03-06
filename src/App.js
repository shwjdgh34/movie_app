import React, {Component} from 'react';
import './App.css';
import Movie from './movie.js';

class App extends Component {
  /*
  componentWillMount(){
    console.log("will mount");
  }
  */

  state = {
  }
  componentDidMount(){
    this._getMovies();
  }
  

  _renderMovies = () => {

    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie 
        title = {movie.title} 
        poster ={movie.medium_cover_image} 
        key = {movie.id} 
        genres = {movie.genres}
        synopsis = {movie.synopsis}
        />
     })
     return movies
  }
  _getMovies = async () => {
    const movies = await this._callAPI()
    this.setState({
      movies
    })
  }
  _callAPI = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }
  
  render (){
    const {movies} = this.state;
    return (
      <div className= {movies? 'App' : 'App--Loading'}>
       {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
  
}

export default App;
