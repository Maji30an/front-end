import React from "react";

const ListMenu = (props) => {
   return(
      <div className='text-white text-left space-y-10'>
         <h5 className='font-bold text-xl leading-6'>{props.title}</h5>
         <ul className='space-y-5'>
            {props.items.map((item, i) =>
               <li key={i}>
                  <a href='#' className='font-poppins font-medium text-lg leading-[22.5px] tracking-45'>{item}</a>
               </li>
            )}
         </ul>
      </div>
   );
}

export default ListMenu;