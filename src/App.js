// file imports 
import './App.css'

// component imports 
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Spinner from './Components/Spinner'
import PosterGrid from './Components/PosterGrid'
import SelectedMovie from './Components/SelectedMovie'

// class constructor 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: []
    }
  }

// lifecycle methods 
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => this.setState({movies: data}))
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

  setSelectedView = ()  =>  {
    this.setState({ singleMovie: [] })
  }

  backButton = () =>  {
    this.setState({ singleMovie: [] })
  }

// component render
  render() {
    console.log(this.state);
    if(this.state.movies.length === 0) {
      return(
          <main className="App">
            <Route 
              path="/"
              render = {() => (
                <div>  
                  <Header />
                  <Spinner />
                </div>
              )
            }/>
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
                  <PosterGrid 
                    movies={this.state.movies.movies}
                    getMovie={this.getMovie}
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
                  key={match.params.id}
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
