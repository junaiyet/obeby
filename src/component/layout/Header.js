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
    let [show,setShow] = useState(false)
    let [showtwo,setShowTwo] = useState(false)
    let ref = useRef()
    let reftwo = useRef()
    useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
        console.log(ref.current)
        if(ref.current.contains(e.target)){
          setShow(true)
        }else{
          setShow(false)
        }
        if(reftwo.current.contains(e.target)){
          setShowTwo(true)
        }else{
          setShowTwo(false)
        }
      })
    },[])
    return (
        <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between ">
                <div className= "flex items-center">
                    <Dropdown className="relative"  dropref={ref}>
                    <p className='flex items-center font-dm text-sm font-normal'><RiBarChartHorizontalLine/>  Shop by Category</p>
                  {show && 
                    <List className="absolute top-8 w-[263px]  bg-primary text-[#767676] font-dm text-sm font-normal ">
                        <ListItem className="py-4 px-5  hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300" itemname="Accesories"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Furniture"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Electronics"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Clothes"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Home appliances"/>
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
                    <Dropdown className="relative" dropref={reftwo}>
                    <div className="">
                        <MdManageAccounts/>
                    </div>
                    {showtwo && 
                    <List className="absolute top-8 w-[263px]  bg-primary text-[#767676] font-dm text-sm font-normal ">
                        <ListItem className="py-4 px-5  hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300" itemname="Accesories"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Furniture"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Electronics"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Clothes"/>
                        <ListItem className="py-4 px-5 hover:px-7  border border-solid border-[#2d2d2d] hover:text-[#ffff] ease-in duration-300 hover:font-bold" itemname="Home appliances"/>
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