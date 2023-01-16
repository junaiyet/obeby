import React, { useState } from 'react'
import {GoTriangleDown} from 'react-icons/go'
import LeftSidebarItem from './LeftSidebarItem'

const SidebarContent = ({dropDown,dropTitle,data}) => {
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
        {data.map((item,index)=>(
            item.subcategory ? (
            <LeftSidebarItem subDropDown={item.subcategory?true:false} 
            title={item.name} >
              {item.subcategory && 
                   item.subcategory.map((sitem)=>(
                    <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>{sitem.name}</h4>

                ))}
           </LeftSidebarItem>

            ):(

            <LeftSidebarItem subDropDown={item.subcategory?true:false}
             title={item.name}
             color={item.code}
             >
              {item.subcategory && 
                   item.subcategory.map((sitem)=>(
                    <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>{sitem.name}</h4>

                ))}
           </LeftSidebarItem>
            )
          ))}
                  
 
           
 
        </>
        }
        {drop == false && 
            <>
          {data.map((item,index)=>(
            item.subcategory ? (
            <LeftSidebarItem subDropDown={item.subcategory?true:false} title={item.name} >
              {item.subcategory && 
                   item.subcategory.map((sitem)=>(
                    <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>{sitem.name}</h4>

                ))}
           </LeftSidebarItem>

            ):(

            <LeftSidebarItem subDropDown={item.subcategory?true:false}
             title={item.name}
             color={item.code}
             >
              {item.subcategory && 
                   item.subcategory.map((sitem)=>(
                    <h4 className='font-dm font-normal text-base text-[#767676] cursor-pointer border-b border-solid border-[#F0F0F0] py-5'>{sitem.name}</h4>

                ))}
           </LeftSidebarItem>
            )
          ))}
                  
 
        </>
        }
    </div>
  )
}

export default SidebarContent