import React from 'react'

function Badge({title}) {
  return (
    <span className='bg-primary text-[#fff] py-2 px-8 absolute top-5 left-5'>{title}</span>
  )
}

export default Badge