import React, { Component } from 'react'
import './PosterGrid.css'
import Poster from './Poster'

const PosterGrid = ({movies, getMovie}) =>  {
  const posters = movies.map(movie => {
    return(
      <Poster
      key={movie.id}
      id={movie.id}
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