import React, { Component } from 'react'
import './Poster.css'

const Poster = ({id, posterPath, getMovie})  =>  {
  return(
    <div className='poster-wrapper'>
      <img src={posterPath} className="poster-img" onClick={() => getMovie(id)}/>
    </div>
  )
}

export default Poster