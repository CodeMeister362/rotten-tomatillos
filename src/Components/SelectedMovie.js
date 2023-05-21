// file imports 
import './SelectedMovie.css'

// component imports 
import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import ErrorLanding from './ErrorLanding'

// class component 
class SelectedMovie extends React.Component {
  constructor(props)  {
    super(props)
      this.state =  {
        movie: [],
        videos: [],
        error: ""
      }
  }

  // component lifecycle methods 
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
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
      .then((response) => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          return response.json()
        }
      })
      .then((data) => this.setState({ videos: data }))
      .catch((err)  => this.setState({ error: err.message }))
    }

  // component render
  render () {
    if (window.location.toString().includes("error"))  {
    return(
      <div>  
        <ErrorLanding />
      </div>
    )
    } else if (this.state.movie.length === 0 || this.state.videos.length === 0 || this.state.videos.videos[0].key == undefined && !window.location.toString().includes("error")) {
      return(
        <div>  
          <Spinner />
        </div>
      )
    } else {
      let videoKey = this.state.videos.videos[0].key
      let embedURL = `https://www.youtube.com/embed/${videoKey}`
      return(
        <div className="selected-movie-container">
          <img className="background" src={this.state.movie.movie.backdrop_path}/>
          <div className="gradient"/>
            <div className="details-container-column">
              <div className="details-container-row">
                <img className="poster" src={this.state.movie.movie.poster_path}/>
                <div className="details">
                  <h1 className="title">{this.state.movie.movie.title}</h1>
                  <p className="release-date">{this.state.movie.movie.release_date.slice(0,4)}</p>
                  <p className="average-rating">{this.state.movie.movie.average_rating.toFixed(0)} ⭐️</p>
                  <p className="tagline">"{this.state.movie.movie.tagline}"</p>
                  <p className="description">{this.state.movie.movie.overview}</p>
                  <p className="budget">Budget ${this.state.movie.movie.budget.toLocaleString()}</p>
                  <p className="revenue">Revenue ${this.state.movie.movie.revenue.toLocaleString()}</p>
                </div>
                <div className="trailer">
                  <iframe className="iframe" width="645" height="395" src={embedURL} title="YouTube video player" ></iframe>
                </div>
              </div>
            <Link to={"/"}>
              <button className="back-button" onClick={this.props.back}>back</button>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default SelectedMovie

// prop types 
SelectedMovie.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    average_rating: PropTypes.number,
    backdrop_path: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.array,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  videos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    movie_id: PropTypes.number,
    key: PropTypes.string,
    site: PropTypes.string,
    type: PropTypes.string,
  }))),
  error: PropTypes.string,
  back: PropTypes.func
}
