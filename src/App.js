import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header'
import PosterGrid from './Components/PosterGrid'
import SelectedMovie from './Components/SelectedMovie'
// import MovieData from './MockData/MovieData'
import Spinner from './Components/Spinner'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: null,
      singleMovie: null
    }

  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then((response) => response.json())
        .then((data) => this.setState({movies: data}))
        .then(console.log(this.state.movies))
        .catch((err)  => this.setState({error: err.message})
        )
      }

  getMovie = (id) => {
    const movie = this.state.movies.movies.filter(movie => {
      return movie.id === id
    })
    this.setState({ singleMovie: movie })
  }

  backButton = () =>  {
    this.setState({ singleMovie: null })
  }

  render() {
    if(this.state.movies === null) {
      return(
        <main className="App" style={{"height" : "100%", "width" : "100%"}}>
          <Spinner />
        </main>
      )
    }
    if(this.state.singleMovie === null) {
      return (
        <main className="App" style={{"height" : "100%", "width" : "100%"}}>
          <PosterGrid 
            movies={this.state.movies.movies}
            getMovie={this.getMovie}
          />
        </main>
    );
    } else {
      return (
        <main className="App" style={{"height" : "100%", "width" : "100%"}}>
          <SelectedMovie 
            movie={this.state.singleMovie}
            backButton={this.backButton}
          /> 
        </main>)
    }

  }
}

export default App;
