import React from 'react'
import SidebarContent from './SidebarContent'
import { category,colors,brands, prices } from '../../data/data'

const LeftSidebar = () => {
  return (
    <>
    <SidebarContent dropDown={true} dropTitle="Shop by Category" data={category}/>
    <SidebarContent dropDown={false} dropTitle="Shop by Color" data={colors}/>
    <SidebarContent dropDown={false} dropTitle="Shop by Brand" data={brands}/>
    <SidebarContent dropDown={true} dropTitle="Shop by Price" data={prices}/>
    
    </>
  )
}

export default LeftSidebar