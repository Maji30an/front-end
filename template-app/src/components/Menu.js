import React from "react";
import search from "../assets/img/icon-search.svg";

const Menu = () => {
   const items = ['Home', 'Service', 'Blog', 'Portfolio', 'Contact'];
   return(
      <nav className='capitalize font-bold text-xl leading-6 text-white'>
         <ul className='flex gap-[5.75rem] items-center'>
            {items.map((item, index) =>
               <li key={index}><a href='#'>{item}</a></li>
            )}
            <img src={search} alt='search'/>
         </ul>
      </nav>
   );
}

export default Menu;