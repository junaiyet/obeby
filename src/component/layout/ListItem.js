import React from 'react'
import {  NavLink } from 'react-router-dom'

function ListItem({itemname,className,href}) {
  return (
    <li className={className}>
      <NavLink  to={href} className={className}>{itemname}</NavLink></li>
  )
}

export default ListItem