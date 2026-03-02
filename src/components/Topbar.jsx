import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div className="bg-[#F3F6FB] text-black py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center gap-2 text-sm">
           <FaLocationPin className="text-black" />
            <span className="text-sm ml-2">6391 Elgin St. Celina, 10299</span>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap items-center gap-6">
              <div className='flex items-center gap-2.5'>
              <FaPhone className="text-black" />
              <span>(629) 555-0129</span>
              </div>
              <div className='flex items-center gap-2.5'>
              <FaEnvelope className="text-black" />
              <span>info@example.com</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar