import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navber from './Navber'

function RootLayout() {
  return (
    <>
      <Navber/>  
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout