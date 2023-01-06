import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Breadcrumb = ({title}) => {
  return (
    <div className='my-32'>
    <h1 className='mb-3 font-dm font-bold text-5xl text-primary capitalize'> {window.location.pathname.split("/")[1]}</h1>
    <p className='font-dm font-normal text-xs text-[#767676] gap-x-1'> 
    <Link to="/">Home</Link>
     <FaAngleRight className='inline-block'/> 
      {window.location.pathname.split("/")[1]}</p>
    </div>
  )
}

export default Breadcrumb