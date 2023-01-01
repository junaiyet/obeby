import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navber from './Navber'

function RootLayout() {
  return (
    <>
      <Navber/>  
      <Header/>
      <Outlet/>
    </>
  )
}

export default RootLayout