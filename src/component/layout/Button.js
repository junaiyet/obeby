import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-primary h-[50px] w-full sm:w-[200px] text-[#fff] font-dm font-bold text-base capitalize'>{props.title}</button>
  )
}

export default Button