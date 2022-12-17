import React from 'react'

function Dropdown({children,className,title,onClick,dropref}) {
  return (
    <div className={className}  ref={dropref}>
        <p>{title}</p>
        {children}</div>
  )
}

export default Dropdown