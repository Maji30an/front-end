import React from "react";

const Counter = (props) => {
   return(
      <div className='flex flex-col items-center gap-10'>
         <img src={props.src} alt={props.title} />
         <span className='font-poppins font-secondary font-semibold text-[28px] leading-[35px] tracking-45'>{props.title}</span>
      </div>
   );
}

export default Counter;