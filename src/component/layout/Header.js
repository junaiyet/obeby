import React, { useEffect, useRef, useState } from 'react'
import {RiBarChartHorizontalLine} from "react-icons/ri"
import {BsCartFill} from "react-icons/bs"
import {MdManageAccounts} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Dropdown from './Dropdown'
import List from './List'
import ListItem from './ListItem'
import Search from './Search'
import { Link } from 'react-router-dom'
function Header() {
    let [categoryDropdownShow,setCategoryDropdownShow] = useState(false)
    let [userDropdownShow,setUserDropdownShow] = useState(false)
    let [cartDropdownShow,setCartDropdownShow] = useState(false)
    let categoryRef = useRef()
    let userRef = useRef()
    let cartRef = useRef()
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
        if(cartRef.current.contains(e.target)){
          setCartDropdownShow(true)
        }else{
          setCartDropdownShow(false)
        }
      })
    },[])
    return (
        <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between ">
                <div className= "flex items-center">
                    <Dropdown className="relative"  dropref={categoryRef}>
                    <p className='flex items-center font-dm text-sm font-normal'><RiBarChartHorizontalLine className='cursor-pointer mr-3'/> <span className='hidden lg:inline-block'> Shop by Category</span> </p>
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
                <div className="w-auto lg:w-[600px] relative">
                  <Search className='w-full  py-4 px-5 placeholder:text-[#c4c4c4] font-dm text-sm font-normal ' placeholder='Search Products' />
                  <AiOutlineSearch className='absolute right-4 top-4 cursor-pointer' />
                  </div>
                <div className= "flex items-center">
                  <Flex className="flex gap-x-10">
                    <Dropdown className="relative" dropref={userRef}>
                    <div className="">
                        <MdManageAccounts className='cursor-pointer'/>
                    </div>
                    {userDropdownShow && 
                    <List className="absolute top-8 right-0 w-[200px]  bg-[#ffff] text-[#767676] font-dm text-sm font-normal text-center border border-solid border-[#f0f0f0]">
                        <ListItem className="py-4 px-5 border-b border-solid border-[#f0f0f0] hover:text-[#ffff]
                        hover:bg-primary cursor-pointer ease-in duration-300" itemname="My Account"/>
                        <ListItem className="py-4 px-5   border-b border-solid border-[#f0f0f0] hover:text-[#ffff] hover:bg-primary cursor-pointer ease-in duration-300 hover:font-bold" itemname="Log Out"/>
                    </List>
                  }
                    </Dropdown>
                    <div className="">
                        <Dropdown className="relative" dropref={cartRef}>
                        <BsCartFill className='cursor-pointer'/>
                    {cartDropdownShow && 
                    <div className="w-[360px] absolute top-8 right-0  border border-solid border-[#f0f0f0]">

                    <div className="bg-[#f5f5f6] p-5">
                     <Flex className="flex gap-x-5 justify-between mb-3">
                         <div className="">
                          <Image imgsrc="assets/cartImage.png"/>
                         </div>
                         <div className=" flex flex-col justify-center ">
                          <h3 className='font-dm font-bold text-sm text-primary'>Black Smart Watch</h3>
                          <p className='font-dm font-bold text-sm text-primary mt-3'>$ 44.00</p>
                         </div>
                            <div className="flex justify-end items-center">
                            <h1>x</h1>
                            </div>
                     </Flex>
                    </div>
                     <div className="bg-white p-5">
                       <h4 className='font-dm font-normal text-base text-[#765656]'>Subtotal  <strong className='text-primary'>$44.00</strong></h4>
                       <div className=" mt-3  ">
                       <Link  to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-primary inline-block'>View  Cart</Link>
                       <Link  to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-primary inline-block bg-primary text-[#fff] ml-5'>Checkout</Link>
                       </div>
                     </div>
                    </div>
                  }
                    </Dropdown>
                    </div>
                  </Flex>
                </div>
        </Flex>
        </Container>

        </div>
  )
}

export default Header