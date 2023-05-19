// file imports 
import './SelectedMovie.css'

// component imports 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

// global variables 
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// component 
class SelectedMovie extends React.Component {
  constructor(props)  {
    super(props)
      this.state =  {
        movie: [],
        error: ""
      }
    // let URL = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`
    // console.log(URL);
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then((response) => {
        if(!response.ok) {
          console.log("WE'VE GOT AN ERROR")
          throw new Error(`${response.status}`)
        } else {
          console.log("RESPONSE OK")
          return response.json()
        }
      })
      .then((data) => this.setState({ movie: data }))
      .catch((err)  => this.setState({ error: err.message }))
    }

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
              <p className="description">{loremIpsum}</p>
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