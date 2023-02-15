import React, { useState } from 'react'
import {GoTriangleDown} from 'react-icons/go'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const LeftSidebarItem = (props) => {
    let [drop,setDrop] = useState(props.subDropDown)
    let [show,setShow] = useState(false)
    let [iconShow,setIconShow] = useState(false)
  return (
    <div className="">
    <div>
        {drop ? 
    <div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer border-b border-solid border-[#F0F0F0] py
    '>
        <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer py-5  flex justify-between w-full' onClick={()=>setIconShow(!iconShow)} > 
      {props.color &&
        <span className='inline-block w-3 h-3 rounded-full  mr-2' style={{background:props.color}}></span> 
      }
        
        {props.title}
        
        {drop && 
          iconShow ? 
          <AiOutlineMinus className='text-[#767676]'/>
          :
          <AiOutlinePlus className='text-[#767676]'/>

       }
         </h4>
    </div>       
        :
        <div  className='flex items-center justify-between cursor-pointer border-b border-solid border-[#F0F0F0] py
        '>
            <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer py-5'> 
          {props.color &&
            <span className='inline-block w-3 h-3 rounded-full  mr-2' style={{background:props.color}}></span> 
          }
            
            {props.title} </h4>
         
        </div> 
        }
    </div>
    {show && <div>{props.children}</div>
    }
</div>
  )
}

export default LeftSidebarItem