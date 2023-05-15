// file imports 
import './Header.css'
import logo from '../assets/logo.png'

// component imports 
import React, { Component } from 'react'

// component
const Header = ()  =>  {
  const refresh = () => window.location.reload(true)
  return(
    <div className="header-container">
      <img className="logo" src={logo} onClick={refresh} alt="logo-image"/>
    </div>
  )
}

export default Header