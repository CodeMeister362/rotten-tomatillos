// file imports 
import './PosterGrid.css'

// component imports 
import React from 'react'
import Poster from './Poster'
import PropTypes from 'prop-types'

// component 
const PosterGrid = ({movies, getMovie}) =>  {
  const posters = movies.map(movie => {
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

PosterGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMovie: PropTypes.func.isRequired
}