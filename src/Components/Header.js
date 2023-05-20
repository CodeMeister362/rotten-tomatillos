// file imports 
import './Header.css'
import logo from '../assets/logo.png'

// component imports 
import React from 'react'
import { Link } from 'react-router-dom'

// functional component
const Header = ({reload}) => {
  return(
    <Link to={'/'}>
      <div className="header-container">
        <img className="logo" src={logo} alt="rotten-tomatillos-logo" onClick={reload} />
      </div>
    </Link>
  )
}

export default Header