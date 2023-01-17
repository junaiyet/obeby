import React from 'react'

const InputBox = (props) => {
  return (
    <div className='mb-6'>
        <label htmlFor="" className='block font-dm font-bold text-base '>{props.title}</label>
        <props.as placeholder={props.placeholder} className="border-b border-solid border-[#f0f0f0] py-2.5 w-full placeholder:font-dm placeholder:text-bold placeholder:font-normal outline-0 " />
    </div>
  )
}

export default InputBox