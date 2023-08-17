import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="navbar" id='Navbar'>
      <div className="n-left">PORTFOLIO</div>
      <div className="n-right">
        <ul>
          <Link spy={true} to='Intro' smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to='About' smooth={true}>
            <li>About</li>
          </Link>
          <Link spy={true} to='Skills' smooth={true}>
            <li>Skills</li>
          </Link>
          <Link spy={true} to='Projects' offset={-50} smooth={true}>
            <li>Projects</li>
          </Link>
          <Link spy={true} to='Contact' offset={-60} smooth={true}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar