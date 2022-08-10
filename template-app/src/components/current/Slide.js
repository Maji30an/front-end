import React from "react";
import arrowRight from "../../assets/img/arrow-right.svg";
import share from "../../assets/img/share.svg";

const Slide = (props) => {
   return(
      <div className={`${props.class} bg-no-repeat max-w-[520px]`}>
         <div className='text-white py-9 px-[30px] bg-[#00000099] text-left'>
            <small className='font-poppins font-normal text-2xl tracking-45'>August 2, 2021</small>
            <h4 className='font-poppins font-semibold text-[32px] leading-10 tracking-45 mt-[30px] mb-[100px]'>How to Uncrease Your ROI
               Through scientific SEM?</h4>
            <div className='flex gap-4'>
               <a href='#' className='font-poppins font-normal text-2xl tracking-45'>READ MORE</a>
               <img src={arrowRight} alt='arrow' />
               <img src={share} alt='share' className='ml-auto' />
            </div>
         </div>
      </div>
   );
}

export default Slide;