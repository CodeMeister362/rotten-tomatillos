import React from 'react'

const SelectedMovie = ({movie}) => {
	console.log('display', movie[0])
	return(
		<div className="selected-movie">
			<img src={movie[0].poster_path}/>
		</div>
	)
}

export default SelectedMovie