import React from 'react'
import './SelectedMovie.css'

const SelectedMovie = ({movie, backButton}) => {

let background = movie[0].backdrop_path
// console.log("background", background)

// let style = {
//   background: `url(${(background)}`,
//   background
// }

	return(
		<div className="selected-movie" style={{background: `url(${(background)}`}}>
			<img className="poster" src={movie[0].poster_path}/>
      <h1 className="title">{movie[0].title}</h1>
      <p className="average_rating">{movie[0].average_rating.toFixed(2)}</p>
      <p className="release_date">{movie[0].release_date.slice(0,4)}</p>
      <button className="backButton" onClick={backButton} >back</button>
		</div>
	)
}

export default SelectedMovie