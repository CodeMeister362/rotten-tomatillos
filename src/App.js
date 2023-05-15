// file imports 
import './App.css';

// component imports 
import React, { useState } from 'react'
import Header from './Components/Header'
import Spinner from './Components/Spinner'
import PosterGrid from './Components/PosterGrid'
import SelectedMovie from './Components/SelectedMovie'

// class constructor 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: null,
      singleMovie: null
    }

  }

// lifecycle methods 
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then((response) => response.json())
        .then((data) => this.setState({movies: data}))
        .then(console.log(this.state.movies))
        .catch((err)  => this.setState({error: err.message})
        )
      }

// functions
  getMovie = (id) => {
    const movie = this.state.movies.movies.filter(movie => {
      return movie.id === id
    })
    this.setState({ singleMovie: movie })
  }

  backButton = () =>  {
    this.setState({ singleMovie: null })
  }

// component render
  render() {
    if(this.state.movies === null) {
      return(
        <main className="App">
          <Header />
          <Spinner />
        </main>
      )
    }
    if(this.state.singleMovie === null) {
      return (
        <main className="App">
          <Header />
          <PosterGrid 
            movies={this.state.movies.movies}
            getMovie={this.getMovie}
          />
        </main>
    );
    } else {
      return (
        <main className="App">
          <Header />
          <SelectedMovie 
            movie={this.state.singleMovie}
            backButton={this.backButton}
          /> 
        </main>)
    }

  }
}

export default App;
