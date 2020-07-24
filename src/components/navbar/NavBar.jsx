import React from 'react'
import './NavBar.css'

const NavBar = () => {
  const navbarLinks = ['Today', 'Topics', 'Writers', 'Podcasts', 'Magazine', 'More', 'Search', 'Login']
  return (
    <div data-testid='navbar' className='navbar-container'>
      <div data-testid='navbar-title' className='navbar-title'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Spectator_logo.svg" alt=""/>
      </div> 
      <div className='navbar-links'>
        {navbarLinks.map((navbarLink) => {
          return (<a href="/">{navbarLink}</a>)
        })}
      </div>
    </div>
  )
}

export default NavBar