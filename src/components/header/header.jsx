import React from 'react'
import './header.css'
import logo from '../../../public/logo.png'

function Header() {

  return (
    <div className='body'>
    <header>
    <div className="container">
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><button>Log in</button></li>
          <li><button>Sign up</button></li>
        </ul>
      </nav>
    </div>
   </header>
    </div>
  )
}

export default Header
