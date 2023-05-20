// file imports 
import './PosterGrid.css'

// component imports 
import React from 'react'
import { Link } from 'react-router-dom'
import Poster from './Poster'
import PropTypes from 'prop-types'

// functional component 
const PosterGrid = ({ movies, getMovie, searchedMovie, searchInput}) =>  {  
    const posters = (searchedMovie.length === 0 ? movies : searchedMovie).map(movie => {
      return(
        <Poster
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          getMovie={getMovie}
        />
      )
    })
    if (posters.length === 40 && searchInput === "yes") {
      window.alert("There are no results for that search. Try again?")
    } 
    return(
      <div className ='poster-container'>
        {posters}
      </div>
    )
}

export default PosterGrid

// prop types
PosterGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMovie: PropTypes.func.isRequired
}