import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './Image';
import { Link } from 'react-router-dom';
function Banner() {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
             
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "blue",
                borderRight: "3px blue solid",
                padding:"10px 0",
              }}
            >
              0{i + 1}
            </div>
          )
      
      };
  return (
        <Slider {...settings}>
          <Link to="#">
          <div >
            <Image imgsrc="assets/banner.png" />
          </div>
          </Link>
          <Link to="#">
          <div >
            <Image imgsrc="assets/banner.png" />
          </div>
          </Link>
          <Link to="#">
          <div >
            <Image imgsrc="assets/banner.png" />
          </div>
          </Link>
        </Slider>

  )
}

export default Banner