// file imports 
import './PosterGrid.css'

// component imports 
import React from 'react'
import Poster from './Poster'
import PropTypes from 'prop-types'

// functional component 
const PosterGrid = ({ movies, getMovie, searchedMovie}) =>  {  
  // I still think it's possible there needs to be a conditional in the return here that dictates wether the poster grid has not been searched (an array with a length of exactly 40) or has been searched (an array with length not exactly equal to 40). If it hasn't been searched, render the page with a link of /. If it HAS been searched, render a link of /search or something
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