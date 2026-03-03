import React from 'react'
import { FaBookOpen, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#F3F6FB] text-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center">
                <FaBookOpen className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold">ESCOLA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students with quality education and skills for a brighter future. Join us in shaping the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center hover:bg-[#d63d56] transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center hover:bg-[#d63d56] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center hover:bg-[#d63d56] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-[#e94560] rounded-full flex items-center justify-center hover:bg-[#d63d56] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaLocationArrow className="text-[#e94560] mt-1" />
                <span className="text-gray-400 text-sm">123 Education Street, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#e94560]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#e94560]" />
                <a href="mailto:info@escola.com" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">info@escola.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for updates and educational content.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-[#2a2a4e] text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560]"
              />
              <button 
                type="submit" 
                className="bg-[#e94560] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#d63d56] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Escola. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer