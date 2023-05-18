// file imports 
import './PosterGrid.css'

// component imports 
import React, { Component } from 'react'
import Poster from './Poster'

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