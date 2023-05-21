// file imports
import './SearchResult.css'

//component imports
import React from 'react'

// functional component
const SearchResult = ()  =>  {
  return (
    <div className ='search-error-container'>
      <p className="search-error-message"> There are no results for that search. Try again? </p>
    </div>
  )
}

export default SearchResult