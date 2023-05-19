// file imports 
import './SelectedMovie.css'

// component imports 
import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

// component 
class SelectedMovie extends React.Component {
  constructor(props)  {
    super(props)
      this.state =  {
        movie: [],
        error: ""
      }
  }

  // lifecycle methods 
  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then((response) => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          return response.json()
        }
      })
      .then((data) => this.setState({ movie: data }))
      .catch((err)  => this.setState({ error: err.message }))
    }

  // component render
  render () {
    if (this.state.movie.length === 0) {
      return(
        <div>  
          <Spinner />
        </div>
      )
    } else {
      return(
        <div className="selected-movie">
        <div className="selected-movie">
          <img className="background" src={this.state.movie.movie.backdrop_path}/>
          <div className="gradient"/>
          <div className="details-container">
            <img className="poster" src={this.state.movie.movie.poster_path}/>
            <div className="details">
              <h1 className="title">{this.state.movie.movie.title}</h1>
              <p className="release-date">{this.state.movie.movie.release_date.slice(0,4)}</p>
              <p className="average-rating">{this.state.movie.movie.average_rating.toFixed(0)} ⭐️</p>
              <p className="description">{this.state.movie.movie.overview}</p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="back-button" onClick={this.backButton}>back</button>
          </Link>
        </div>
      </div>
      )
    }
  }
}



export default SelectedMovie