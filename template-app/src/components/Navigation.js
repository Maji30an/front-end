import React from "react";
import search from "../assets/img/icon-search.svg";

const Navigation = () => {
  return(
     <nav className='capitalize font-bold text-xl leading-6 text-white'>
        <ul className='flex gap-[5.75rem] items-center'>
           <li><a href='#'>Home</a></li>
           <li><a href='#'>Service</a></li>
           <li><a href='#'>Blog</a></li>
           <li><a href='#'>Portfolio</a></li>
           <li><a href='#'>Contact</a></li>
           <li><a href='#'><img src={search} alt='search'/></a></li>
        </ul>
     </nav>
  );
}

export default Navigation;