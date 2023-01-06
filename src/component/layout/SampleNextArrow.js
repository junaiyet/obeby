import React from 'react'
import "slick-carousel/slick/slick.css";
import {HiOutlineArrowRight} from 'react-icons/hi'

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="!flex justify-center items-center absolute top-[30%] right-[25px] bg-[#979797]  rounded-full w-16 h-16 text-[#fff] text-center"
        style={{ ...style,  }}
        onClick={onClick}
      ><HiOutlineArrowRight className='text-2xl' /></div>
    );

}

export default SampleNextArrow