import React from 'react'

const InputBox = (props) => {
  return (
    <div>
        <label htmlFor="" className='block'>Name</label>
        <props.as placeholder={props.placeholder}/>
    </div>
  )
}

export default InputBox