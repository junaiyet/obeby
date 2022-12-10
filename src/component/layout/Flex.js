import React from 'react'

function Flex({children,className}) {
  return (
<div className={className}>
         {children}
    </div>
  )
}

export default Flex