import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../component/layout/Breadcrumb'
import Container from '../component/layout/Container'
import Flex from '../component/layout/Flex'
import LeftSidebar from '../component/layout/LeftSidebar'
import Pagination from '../component/layout/Pagination'
import {BsFilterCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'


const Shope = () => {
  let [show,setShow] = useState(false);
  let showRef = useRef()
  let [showNumber,setShowNumber] = useState(12)
  let handlePaginationchange =(e)=>{
    setShowNumber(+e.target.value)
   }
   useEffect(()=>{
    function scrollWidth() {
     if(window.innerWidth < 667){
       setShow(false)
     }else(
       setShow(true)
     )
    }
    scrollWidth()


},[])


  return (
    <div>
        <Container>
         <Breadcrumb />
        
         <Flex className="flex gap-x-10 relative">
              {show &&
            <div className="w-full md:w-[25%] sm:w-[55%] absolute top-0 left-0 bg-[#fcfcfc] sm:static sm:bg-[#fff] z-50 p-5">
              <>
              <AiFillCloseCircle onClick={()=>setShow(!show)}className='text-xl cursor-pointer sm:hidden block '/>
              <LeftSidebar/>
              </>
            </div>
         }
            <div className="w-full md:w-[75%] relative">  
           <div className="absolute top-3 left-2 ">
           <BsFilterCircleFill onClick={()=>setShow(!show)} className='inline-block md:hidden text-xl text-[#767676] cursor-pointer'/>

           </div>
            <div className="flex flex-wrap gap-x-5 gap-y-4 md:gap-y-0  justify-end mb-5">
                 <div className="flex  gap-3 items-center font-dm font-normal text-base">
                        <label for="countries" class=" text-[#767676]"> Sort by:</label>
                        <select id="countries" class="md:w-[239px]  border border-[#f0f0f0] text-[#767676] text-sm   focus:border-black-500 block p-2.5 ">
                        <option selected>Featured</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                </div>      
                 <div className="flex  gap-3 items-center font-dm font-normal text-base">
                        <label for="countries" class=" text-[#767676]"> Show:</label>
                        <select onChange={handlePaginationchange} id="countries" class="w-[139px]  border border-[#f0f0f0] text-[#767676] text-sm   focus:border-black-500 block p-2.5 ">
                        <option  value="12">12</option>
                        <option value="24">24</option>
                        <option value="48">48</option>
                        </select>
                </div>      
                </div>      
 
                <Pagination itemsPerPage={showNumber} />
            </div>
         </Flex>
        </Container>
    </div>
  )
}

export default Shope