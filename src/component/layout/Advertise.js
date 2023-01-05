import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'

function Advertise() {
  return (
    <div className='mt-2 md:mt-36'>
        <Container>
            <Flex className="flex gap-x-5 md:gap-x-10">
               <div className="max-w-2/4">
                <Link to="#">
                    <Image imgsrc="assets/ad_1.png" />
                </Link>
               </div>
               <div className="max-w-2/4">
               <Link to="#" >
                    <Image imgsrc="assets/ad_2.png" />
               </Link>
               <Link to="#" className='inline-block mt-2 md:mt-7 '>
                    <Image imgsrc="assets/ad_3.png" />
               </Link>
                
               </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertise