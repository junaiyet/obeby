import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Flex from './Flex'
import {BsFillSuitHeartFill,BsCartFill} from 'react-icons/bs'
import {SlReload} from 'react-icons/sl'
function Product({src,badge}) {
  return (
    <>
        <div className='relative overflow-y-hidden group cursor-pointer'>
        <Image className="w-full" imgsrc={src}/>
        {badge && <Badge title="New"/>}
        <div className="h-40 bg-[#fff] absolute left-0 bottom-[-44%] lg:max-xl:bottom-[-85%] w-full py-5 px-7 group-hover:bottom-0 duration-300">
         <Flex className="flex gap-x-1 justify-end items-center">
            <p className='font-dm font-normal text-base lg:max-xl:text-sm text-[#6D6D6D]'>Add to Wish List</p>
            <BsFillSuitHeartFill className='text-base'/> 
        </Flex>
         <Flex className="flex gap-x-1 justify-end items-center my-5">
            <p className='font-dm font-normal text-base lg:max-xl:text-sm text-[#6D6D6D]'>Compare</p>
            <SlReload className='text-base'/> 
        </Flex>
         <Flex className="flex gap-x-1 justify-end items-center">
            <p className='font-dm font-normal text-base lg:max-xl:text-sm text-[#6D6D6D]'>Add to Cart</p>
            <BsCartFill className='text-base'/> 
        </Flex>
        </div>
        </div>

        <div className="mt-0 mb-6 md:mb-0 md:mt-6">
            <Flex className="flex justify-between items-center">
                <h3 className='font-dm font-bold text-xl lg:max-xl:text-sm'>Basic Crew Neck Tee</h3>
                <span className='font-dm font-normal text-base text-[#767676] lg:max-xl:text-sm'>$44.00</span>
            </Flex>
                <span className='font-dm font-normal text-base text-[#767676]  mt-4'>Black</span>
        </div>
    </>
  )
}

export default Product