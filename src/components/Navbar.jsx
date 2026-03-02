import React, { useState } from 'react'
import { FaBookOpen, FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center">
              <FaBookOpen className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-[#1a1a2e]">ESCOLA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1a1a2e] hover:text-[#e94560] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search & Get Started Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              className="text-[#1a1a2e] hover:text-[#e94560] transition-colors"
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
            <a
              href="#"
              className="bg-[#e94560] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d63d56] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1a2e]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-[#1a1a2e]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="inline-block mt-4 bg-[#e94560] text-white px-5 py-2.5 rounded-full text-sm font-medium"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar