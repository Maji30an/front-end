import React from "react";

const Customer = (props) => {
   return(
      <div className='flex items-center gap-5'>
         <img src={props.src} alt={props.title} />
         <span className={`${props.color} font-bold text-[32px] leading-[38px]`}>{props.title}</span>
      </div>
   );
}

export default Customer;