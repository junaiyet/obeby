import React from 'react'
import Breadcrumb from '../component/layout/Breadcrumb'
import Flex from '../component/layout/Flex'
import Container from '../component/layout/Container'
import Image from '../component/layout/Image'

const About = () => {
  return (
    <Container>
        <Breadcrumb/>
        <Flex className="flex gap-x-10">
            <div className="w-2/4">
            <Image imgsrc="assets/about-img-1.png" className="w-full"/>
            </div>
            <div className="w-2/4">
            <Image imgsrc="assets/about-img-2.png" className="w-full"/>
            </div>
        </Flex>
        <div className="sm:mt-32 mt-5">
        <h4 className='font-dm font-normal sm:text-[39px] text-[26px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        </div>
          <Flex className="sm:flex justify-between sm:mt-32 mt-5 sm:gap-x-8 gap-y-5">
            <div className="">
                <h3 className='font-dm font-bold text-2xl'>Our Vision</h3>
                <p className='font-dm font-normal text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
                <h3 className='font-dm font-bold text-2xl'>Our Story</h3>
                <p className='font-dm font-normal text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
                <h3 className='font-dm font-bold text-2xl'>Our Brands</h3>
                <p className='font-dm font-normal text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Flex>
    </Container>
  )
}

export default About