import React, { useEffect, useRef, useState } from 'react'
import {RiBarChartHorizontalLine} from "react-icons/ri"
import {BsCartFill} from "react-icons/bs"
import {MdManageAccounts} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import Container from './Container'
import Flex from './Flex'
import Dropdown from './Dropdown'
import List from './List'
import ListItem from './ListItem'
import Search from './Search'
function Header() {
    let [categoryDropdownShow,setCategoryDropdownShow] = useState(false)
    let [userDropdownShow,setUserDropdownShow] = useState(false)
    let categoryRef = useRef()
    let userRef = useRef()
    useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
        if(categoryRef.current.contains(e.target)){
          setCategoryDropdownShow(true)
        }else{
          setCategoryDropdownShow(false)
        }
        if(userRef.current.contains(e.target)){
          setUserDropdownShow(true)
        }else{
          setUserDropdownShow(false)
        }
      })
    },[])
    return (
        <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between ">
                <div className= "flex items-center">
                    <Dropdown className="relative"  dropref={categoryRef}>
                    <p className='flex items-center font-dm text-sm font-normal'><RiBarChartHorizontalLine/>  Shop by Category</p>
                  {categoryDropdownShow && 
                    <List className="absolute top-8 w-[263px]  bg-primary text-[#767676] font-dm text-sm font-normal ">
                        <ListItem className="py-4 px-5  hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300" itemname="Accesories"/>
                        <ListItem className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Furniture"/>
                        <ListItem className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Electronics"/>
                        <ListItem className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Clothes"/>
                        <ListItem className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Home appliances"/>
                    </List>
                  }
                    </Dropdown>       
               </div>
                <div className="w-[600px] relative">
                  <Search className='w-full py-4 px-5 placeholder:text-[#c4c4c4] font-dm text-sm font-normal' placeholder='Search Products' />
                  <AiOutlineSearch className='absolute right-4 top-4' />
                  </div>
                <div className= "flex items-center">
                  <Flex className="flex gap-x-10">
                    <Dropdown className="relative" dropref={userRef}>
                    <div className="">
                        <MdManageAccounts/>
                    </div>
                    {userDropdownShow && 
                    <List className="absolute top-8 right-0 w-[200px]  bg-white text-[#767676] font-dm text-sm font-normal text-center border border-solid border-[#f0f0f0]">
                        <ListItem className="py-4 px-5    border-b border-solid border-[#f0f0f0] hover:text-[#ffff]
                        hover:bg-primary cursor-pointer ease-in duration-300" itemname="My Account"/>
                        <ListItem className="py-4 px-5   border-b border-solid border-[#f0f0f0] hover:text-[#ffff] hover:bg-primary cursor-pointer ease-in duration-300 hover:font-bold" itemname="Log Out"/>
                    </List>
                  }
                    </Dropdown>
                    <div className="">
                        <BsCartFill/>
                    </div>
                  </Flex>
                </div>
        </Flex>
        </Container>

        </div>
  )
}

export default Header