import React from 'react'
import './NavBar.css'

const NavBar = () => {
  const navbarLinks = ['Today', 'Topics', 'Writers', 'Podcasts', 'Magazine', 'More', 'Search', 'Login']
  return (
    <div data-testid='navbar' className='navbar-container'>
      <div data-testid='navbar-title' className='navbar-title'>
        <h1>The Spectator</h1>
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