import React from 'react'

function ListItem({itemname,className}) {
  return (
    <li className={className}>{itemname}</li>
  )
}

export default ListItem