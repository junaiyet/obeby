import React from 'react'
import {HiOutlineArrowLeft} from 'react-icons/hi'
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className="!flex justify-center items-center absolute top-[30%] left-0 z-50 bg-[#979797]  rounded-full w-16 h-16 text-[#fff] text-center"
        style={{ ...style,   }}
        onClick={onClick}
      ><HiOutlineArrowLeft className='text-2xl' /></div>
    );

}

export default SamplePrevArrow