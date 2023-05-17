// file imports 
import './PosterGrid.css'

// component imports 
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Poster from './Poster'

// component 
const PosterGrid = ({movies, getMovie}) =>  {
  const posters = movies?.map(movie => {
    let URL = `${movie.id}`;
    return(
      // <Route
      //   key={movie.id}
      //   path="/:URL"
      //   render = {()  =>  (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            getMovie={getMovie}
          />
      //   )}
      // />
    )
  })

  return(
    <div className ='poster-container'>
      {posters}
    </div>
  )
}

export default PosterGrid