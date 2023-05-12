import React, { Component } from 'react'
import './PosterGrid.css'
import Poster from './Poster'

const PosterGrid = ({movies}) =>  {
  const posters = movies.map(movie => {
    // console.log(movie);
    // console.log(movie.poster_path)
    return(
      <Poster
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
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