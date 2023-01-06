import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Product from './Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
function Newarrival() {
     
  let [dotActive,setDotActive] = useState(0)
     
    const settings = {
        arrows:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                dots: false
              }
            },
          ]
      
      };
  return (
    <div className='mt-5 md:mt-32'>
        <Container>
            <Heading title="New Arrivals" />
            <Slider {...settings}>
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
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>
               <div className="sm:max-w-[300px] md-max-lg:max-w-[345px] lg:max-w-[370px] ">
                <Product src="assets/p-1.png"  badge={false}/>
               </div>

            </Slider>
          
     
        </Container>
    </div>
  )
}

export default Newarrival