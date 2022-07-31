import React from "react";
import first from './../assets/img/40+.svg';
import second from './../assets/img/120+.svg';
import third from './../assets/img/130.svg';
import fourth from './../assets/img/24.svg';

const Counter = () => {
   const params = [
      {src: first, title: 'Happy Clients'},
      {src: second, title: 'Project Complate'},
      {src: third, title: 'Win Awards'},
      {src: fourth, title: 'Team Member'},
   ];
   return(
      <section className='shadow-my my-[200px] py-[50px]'>
         <ul className='flex justify-evenly items-center '>
            {params.map((param, index) =>
               <li className='flex flex-col items-center gap-10' key={index}>
                  <img src={param.src} alt={param.title} />
                  <span className='font-[Poppins] font-secondary font-semibold text-[28px] leading-[35px] tracking-45'>{param.title}</span>
               </li>
            )}
         </ul>
      </section>
   );
}

export default Counter;