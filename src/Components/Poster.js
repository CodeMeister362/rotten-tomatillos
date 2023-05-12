import React, { Component } from 'react'
import './Poster.css'

const Poster = ({id, posterPath})  =>  {
  return(
    <div className='poster-wrapper'>
      {/* <h1>{id}</h1> */}
      <img src={posterPath} className="poster-img"/>
    </div>
  )
}

export default Poster