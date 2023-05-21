// file imports 
import './Search.css'

// component imports 
import React from 'react'
import PropTypes from 'prop-types'

// class component
class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
		}
	}

	// component methods 
	handleChange = (event) => {
		event.preventDefault()
    this.setState({ [event.target.name]: event.target.value})
  }

  searchByTitleBtn = (event) => {
    event.preventDefault()
		const newSearch = this.state.title
		this.props.getMovieByTitle(newSearch)
    this.clearInputs()
		this.setState({ title: '' })
  }

  clearInputs = () => {
    this.setState({
      title: ''
    })
  }

	// component render
	render() {
		return(
			<form className='search-form'>
				<input 
					className='search-input'
					type="text"
					placeholder='Search movies by title 🔎' 
					name='title'
					value={this.state.title}
					onChange={event => this.handleChange(event)}
					onSubmit={this.searchByTitleBtn}
				/>
				<button className="submit-button" type="submit" onClick={this.searchByTitleBtn}></button>
			</form>
		)
	}
}

export default Search

// prop types 
Search.propTypes = {
	title: PropTypes.string,
	getMovieByTitle: PropTypes.func
}