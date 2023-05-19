// file imports 
import './App.css'

// component imports 
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Components/Header'
import Spinner from './Components/Spinner'
import PosterGrid from './Components/PosterGrid'
import SelectedMovie from './Components/SelectedMovie'
import Search from './Components/Search'

// class component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: [],
      searchedMovie: [],
      error: ""
    }
  }

// lifecycle methods 
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          return response.json()
        }
      })
      .then((data) => this.setState({movies: data}))
      .catch((err)  => this.setState({error: err.message})
      )
    }

// functions
  getMovie = (id) => {
    const movie = this.state.movies.movies.filter(movie => {
      return movie.id === id
    })
    this.setState({ singleMovie: [movie] })
  }

  backButton = () =>  {
    this.setState({ singleMovie: [] })
  }

  getMovieByTitle = (newSearch) => {
    let lowerCaseTitle = newSearch.toLowerCase().toString()
    let movieByTitle = this.state.movies.movies.filter(movie => {
      return movie.title.toLowerCase() === lowerCaseTitle
    })
    this.setState({ searchedMovie: movieByTitle})
  }

// component render
  render() {
    if (this.state.error !== "") {
      return(
        <div>
          <p className="error">{this.state.error} Error</p>
          <p className="error-message">Sorry, something's gone wrong. Please try again.</p>
        </div>
      )
    } else if (this.state.movies.length === 0) {
      return(
          <main className="App">
            <Switch>
              <Route 
                path="/"
                render = {() => (
                  <div>  
                    <Header />
                    <Search getMovieByTitle={this.getMovieByTitle} />
                    <Spinner />
                  </div>
                )
              }/>
            </Switch>
          </main>
      )
    } else {
      return(
        <main className="App">
          <Switch>
            <Route 
              exact path="/"
              render = {() => (
                <div>  
                  <Header />
                  <Search getMovieByTitle={this.getMovieByTitle} />
                  <PosterGrid 
                    movies={this.state.movies.movies}
                    getMovie={this.getMovie}
                    searchedMovie={this.state.searchedMovie}
                  />
                </div>
              )}/>
            <Route 
              path="/:id"
              render = {({ match })  =>  {
                return(
                  <div>
                  <Header />
                  <Search getMovieByTitle={this.getMovieByTitle} />
                  <SelectedMovie 
                    id={match.params.id}
                    getMovie={this.getMovie}
                    movie={this.state.singleMovie}
                    backButton={this.backButton} 
                  />
                </div>
              )}}/>  
            </Switch>
          </main>
      )
    }
  }
}

export default App;
