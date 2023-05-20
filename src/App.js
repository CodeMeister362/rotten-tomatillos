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
      searchInput: "no",
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
      .then((data) => this.setState({ movies: data }))
      .catch((err)  => this.setState({ error: err.message })
      )
    }

// functions
  getMovie = (id) => {
    const movie = this.state.movies.movies.filter(movie => {
      return movie.id === id
    })
    this.setState({ singleMovie: movie })
  }

  reload = () =>  {
    window.location.reload();
  }

  back = () => {
    this.setState({ movies: [] })
  }

  getMovieByTitle = (newSearch) => {
    let lowerCaseTitle = newSearch.toLowerCase().toString()
    let movieByTitle = this.state.movies.movies.filter(movie => {
      return movie.title.toLowerCase().includes(lowerCaseTitle)
    })
    this.setState({ searchedMovie: movieByTitle })
    this.setState({ searchInput: "yes" })
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
    } if (this.state.movies.length === 0) {
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
              <Redirect from="*" to={"/"} />
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
                  <Header 
                    reload={this.reload}
                  />
                  <Search getMovieByTitle={this.getMovieByTitle} />
                  <PosterGrid 
                    movies={this.state.movies.movies}
                    getMovie={this.getMovie}
                    searchedMovie={this.state.searchedMovie}
                    searchInput={this.state.searchInput}
                  />
                </div>
              )}/>
            <Route 
              path="/:id"
              render = {({ match })  =>  {
                return(
                  <div>
                  <Header />
                  <SelectedMovie 
                    id={match.params.id}
                    getMovie={this.getMovie}
                    movie={this.state.singleMovie}
                    reload={this.back}
                  />
                </div>
              )}}/>  
              <Redirect from="*" to={"/"} />
            </Switch>
          </main>
      )
    }
  }
}

export default App;
