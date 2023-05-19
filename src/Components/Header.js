// file imports 
import './Header.css'
import logo from '../assets/logo.png'

// component imports 
import React from 'react'

// component
const Header = ()  =>  {
  const refresh = () => window.location.reload(true)
  return(
    <div className="header-container">
      <img className="logo" src={logo} onClick={refresh} alt="rotten-tomatillos-logo"/>
    </div>
  )
}

export default Header