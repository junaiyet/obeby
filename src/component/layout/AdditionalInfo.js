import React from 'react'
import Container from './Container'
import Flex from './Flex'
import {TbNumber2} from 'react-icons/tb'
import {FaCaravan} from 'react-icons/fa'
import {SlReload} from 'react-icons/sl'
function AdditionalInfo({children,className}) {
  return (
    <div className="border border-solid border-[#F0F0F0] py-2 sm:py-7 mt-[-10px]">

     <Container>
        <Flex className="flex justify-between">
         <Flex className="flex gap-x-1 sm:gap-x-4 items-center">
            <TbNumber2 className='text-[12px] sm:text-2xl'/> 
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Two years warranty</p>
        </Flex>
         <Flex className="flex gap-x-4 items-center">
            <FaCaravan className='text-[12px] sm:text-2xl'/> 
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Free shipping</p>
        </Flex>
         <Flex className="flex gap-x-4 items-center">
            <SlReload className='text-[12px] sm:text-2xl'/> 
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Return policy in 30 days</p>
        </Flex>
       
        </Flex>
     </Container>
    </div>
    // <div>sdsadfasdf</div>
  )
}

export default AdditionalInfo