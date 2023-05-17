// file imports 
import './SelectedMovie.css'

// component imports 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// component 
const SelectedMovie = ({movie, backButton, URL}) => {
  let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  URL = (`${movie[0].id}`);
  console.log(URL);

	return(
    <div className="selected-movie">
      {/* <Route
        exact path="/:URL"
        render = {()  =>  ( */}
          <div className="selected-movie">
            <img className="background" src={movie[0].backdrop_path}/>
            <div className="gradient"/>
            <div className="details-container">
              <img className="poster" src={movie[0].poster_path}/>
              <div className="details">
                <h1 className="title">{movie[0].title}</h1>
                <p className="release-date">{movie[0].release_date.slice(0,4)}</p>
                <p className="average-rating">{movie[0].average_rating.toFixed(0)} ⭐️</p>
                <p className="description">{loremIpsum}</p>
              </div>
            </div>
            <Link to={"/"}>
              <button className="back-button" onClick={backButton}>back</button>
            </Link>
          </div>
        {/* )}
        /> */}
    {/* <img className="background" src={movie[0].backdrop_path}/>
      <div className="gradient"/>
      <div className="details-container">
        <img className="poster" src={movie[0].poster_path}/>
        <div className="details">
          <h1 className="title">{movie[0].title}</h1>
          <p className="release-date">{movie[0].release_date.slice(0,4)}</p>
          <p className="average-rating">{movie[0].average_rating.toFixed(0)} ⭐️</p>
        <p className="description">{loremIpsum}</p>
        </div>
      </div>
      <button className="back-button" onClick={backButton}>back</button>
		</div> */}
    </div>
	)
}

export default SelectedMovie