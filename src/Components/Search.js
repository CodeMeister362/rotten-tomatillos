import React from 'react'
import './Search.css'


class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
		}
	}

	handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  searchByTitleBtn = (event) => {
    event.preventDefault()
		const newSearch = this.state.title
		this.props.getMovieByTitle(newSearch)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      title: ''
    })
  }

	render() {
		return(
			<form className='search-form'>
				<input 
					className='search-input'
					type="text"
					placeholder='Search By Title'
					name='title'
					value={this.state.title}
					onChange={event => this.handleChange(event)}
				/>
				<button onClick={(event) => {this.searchByTitleBtn(event)}}>SUBMIT</button>
			</form>
		)
	}
}

export default Search