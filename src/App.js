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
      movies: MovieData
    }
  }

  render() {
    return (
      <main className="App">
        {/* <Header /> */}
        <PosterGrid movies={this.state.movies.movies}/>
        {/* <SelectedMovie /> */}
      </main>
  );
  }
}

export default App;
