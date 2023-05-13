import React from 'react'
import './App.css';
import Header from './Components/Header'
import PosterGrid from './Components/PosterGrid'
import SelectedMovie from './Components/SelectedMovie'
import MovieData from './MockData/MovieData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: MovieData,
      singleMovie: null
    }
  }

  getMovie = (id) => {
    const movie = this.state.movies.movies.filter(movie => {
     return movie.id === id
    })
    this.setState({ singleMovie: movie })
  }

  render() {
    if(this.state.singleMovie === null) {
      return (
        <main className="App">
          <PosterGrid 
            movies={this.state.movies.movies}
            getMovie={this.getMovie}
          />
        </main>
    );
    } else {
     return (
        <main className="App">
          <SelectedMovie 
            movie={this.state.singleMovie}
          />
        </main>)
    }

  }
}

export default App;
