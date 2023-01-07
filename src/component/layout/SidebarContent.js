import React, { useState } from 'react'
import {GoTriangleDown} from 'react-icons/go'
import Flex from './Flex'
import LeftSidebarItem from './LeftSidebarItem'
const SidebarContent = ({dropDown,dropTitle}) => {
    let [drop,setDrop] = useState(dropDown)
    let [show,setShow] = useState(dropDown)
  return (
    <div className="mb-10">
        <div>
            {drop ? 
        <div onClick={()=>setShow(!show)} className='flex items- justify-between cursor-pointer mb-9'>
            <h3 className='cursor-pointer font-dm font-bold text-xl text-[#262626] mb-9'>{dropTitle} </h3>
            {drop && 
            <GoTriangleDown className='mt-2'/>
        }
        </div>
            
            :
            <h3 className='cursor-pointer font-dm font-bold text-xl text-[#262626] mb-9'>{dropTitle} </h3>        
            }
        </div>
        {show && 
        <>
            <LeftSidebarItem subDropDown={false} title="Category 1 " >
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>fasdfa</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 2" color="green">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 3" color="blue">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 4" color="purple">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem 
          subDropDown={true}
           title="category 5"
            color="black">

                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
           
 
        </>
        }
        {drop == false && 
            <>
                    <LeftSidebarItem subDropDown={false} title="Category 1 " >
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>fasdfa</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 2" color="green">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 3" color="blue">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 4" color="purple">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="category 5" color="black">
                <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>sadfaslkhfdkjsahdiufhasklj</h4>
           </LeftSidebarItem>
 
        </>
        }
    </div>
  )
}

export default SidebarContent