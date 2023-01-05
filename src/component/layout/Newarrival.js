import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Product from './Product'

function Newarrival() {
  return (
    <div className='mt-5 md:mt-32'>
        <Container>
            <Heading title="New Arrivals" />
            <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10">
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>
     
            </Flex>
        </Container>
    </div>
  )
}

export default Newarrival