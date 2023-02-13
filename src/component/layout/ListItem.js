import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function ListItem({itemname,className,href}) {
  return (
    <li className={className}>
      <NavLink to={href}>{itemname}</NavLink></li>
  )
}

export default ListItem