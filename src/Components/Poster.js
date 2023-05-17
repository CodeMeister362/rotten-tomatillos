// file imports 
import './Poster.css'
import { Link } from 'react-router-dom'

// component imports 
import React, { Component } from 'react'

// component
const Poster = ({id, title, posterPath, getMovie})  =>  {
  return(
    <Link to={`/${id}`} key={id}>
      <div className='poster-wrapper'>
        <img src={posterPath} className="poster-img" id="hvr-grow" alt={title} onClick={() => getMovie(id)}/>
      </div>
    </Link>
  )
}

export default Poster