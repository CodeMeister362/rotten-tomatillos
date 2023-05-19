// file imports 
import './Header.css'
import logo from '../assets/logo.png'

// component imports 
import { Link } from 'react-router-dom'
import React from 'react'

// component
const Header = ()  =>  {
  return(
    <Link to={'/'}>
    <div className="header-container">
      <img className="logo" src={logo} alt="rotten-tomatillos-logo"/>
    </div>
    </Link>
  )
}

export default Header