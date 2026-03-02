import React from 'react'
import { Outlet } from 'react-router'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'

const Root = () => {
  return (
    <main>
        <Topbar />
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Root