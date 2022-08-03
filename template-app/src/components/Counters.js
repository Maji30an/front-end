import React from "react";
import Counter from "./current/Counter";
import first from './../assets/img/40+.svg';
import second from './../assets/img/120+.svg';
import third from './../assets/img/130.svg';
import fourth from './../assets/img/24.svg';

const Counters = () => {
   const params = [
      {src: first, title: 'Happy Clients'},
      {src: second, title: 'Project Complate'},
      {src: third, title: 'Win Awards'},
      {src: fourth, title: 'Team Member'},
   ];
   return(
      <section className='shadow-my my-[200px] py-[50px]'>
         <div className='flex justify-evenly items-center '>
            {params.map((param, index) =>
               <Counter key={index} src={param.src} title={param.title} />
            )}
         </div>
      </section>
   );
}

export default Counters;