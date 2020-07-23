import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div data-testid='navbar' className='navbar-container'>
      <div data-testid='navbarTitle'>
        The Spectator
      </div> 
      This is the NavBar
    </div>
  )
}

export default NavBar