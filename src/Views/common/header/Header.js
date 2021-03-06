import React from 'react'
import Logo from '../logo/Logo'

const Header = (props) => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-white'>
        <Logo />
      </nav>
    </header>
  )
}

export default Header
