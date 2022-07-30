import React from "react";

const ListCustomers = (props) => {
  return(
     <li className='flex items-center gap-5'>
        <img src={props.src} alt={props.title} />
        <span className={`text-[${props.color}] font-bold text-[32px] leading-[38px]`}>{props.title}</span>
     </li>
  );
}

export default ListCustomers;