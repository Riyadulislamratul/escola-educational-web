import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='grid grid-cols-[1fr_auto_2fr]'>
        <div className=''>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar