import React from 'react'
import img from './IMG_1658 (1).jpeg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
       <h1>Jessy<span>Consult</span> <span className='star'><FaStar /></span></h1>
      <ul>
          <li>courses</li>
          <li>contact us</li>
          <li>about us</li>
      </ul>
    </nav>
  )
}

export default Navbar
