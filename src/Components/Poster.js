// file imports 
import './Poster.css'
import { Link } from 'react-router-dom'

// component imports 
import React from 'react'
import PropTypes from 'prop-types'

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


Poster.propTypes = {
  posterPath: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired
}
