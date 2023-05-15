// file imports 
import './Poster.css'

// component imports 
import React, { Component } from 'react'

// component
const Poster = ({id, title, posterPath, getMovie})  =>  {
  return(
    <div className='poster-wrapper'>
      <img src={posterPath} className="poster-img" id="hvr-grow" alt={title} onClick={() => getMovie(id)}/>
    </div>
  )
}

export default Poster