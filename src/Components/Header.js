// file imports 
import './Header.css'
import logo from '../assets/logo.png'

// component imports 
import { Link } from 'react-router-dom'
import React from 'react'

// component
const Header = () => {

  return(
    <Link to={'/'}>
    <div>
      <img className="logo" src={logo} alt="rotten-tomatillos-logo"/>
    </div>
    </Link>
  )
}

//header will have to be a class component bc the state will have to change in order to understand that something is in the input fields 

export default Header