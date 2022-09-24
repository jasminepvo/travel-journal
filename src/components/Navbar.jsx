import React from 'react'
import Logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <img src={Logo} />
        <h4>my travel journal</h4>
      </nav>
    </div>
  )
}