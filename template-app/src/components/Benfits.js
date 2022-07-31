import React from "react";
import Button from "./current/Button";
import circle from './../assets/img/Ellipse-1.svg';
import group6 from './../assets/img/Group-6.svg';
import group7 from './../assets/img/Group-7.svg';
import group10 from './../assets/img/Group-10.svg';
import group11 from './../assets/img/Group-11.svg';

const Benfits = () => {
   const items = [
      'Senectus et scelerisque convallis at sollicitudin tellus volutpa quam. Viverra placerat morbi ut imperdiet.',
      'Senectus et scelerisque convallis at sollicitudin tellus volutpa quam. Viverra placerat morbi ut imperdiet.',
      'Senectus et scelerisque convallis at sollicitudin tellus volutpa quam. Viverra placerat morbi ut imperdiet.',
   ];
   const params = [
      {src: group6, class:'-translate-y-10', title: 'Professional & Certified Company', note: 'Ornare dictum risus cursus amet maurisasfa'},
      {src: group7, title: 'Business & Product Concept too', note: 'Ornare dictum risus cursus amet maurisasfa'},
      {src: group10, class:'-translate-y-10', title: 'Pixel & Perfect Design', note: 'Ornare dictum risus cursus amet maurisasfa'},
      {src: group11, title: 'International Good Relationship', note: 'Ornare dictum risus cursus amet maurisasfa'},
   ];
   return(
      <section className='flex justify-between items-center gap-5'>
         <div className='w-1/2 pt-[150px] pb-[100px]'>
            <h2 className='font-[Poppins] font-medium text-primary text-[28px] leading-[35px] tracking-45'>WHY CHOOSE US</h2>
            <h3 className='font-bold text-5xl leading-[60px] tracking-45 my-5'>We create a curious BUZZ</h3>
            <p className='font-[Poppins] font-normal text-secondary text-2xl tracking-45'>{items[0]}</p>
            <ul className='space-y-[30px] mt-[30px] mb-[100px]'>
               {items.map((item, index) =>
                  <li className='flex items-baseline gap-[13px]' key={index}>
                     <img src={circle} alt='circle'/>
                     <p className='font-[Poppins] font-normal text-secondary text-2xl tracking-45'>{item}</p>
                  </li>
               )}
            </ul>
            <Button color='primary' value='Discover More' />
         </div>
         <div className='w-1/2 py-5 flex flex-wrap justify-end items-center gap-10'>
            {params.map((param, index) =>
               <div className={`flex flex-col justify-start items-start px-[30px] pt-10 pb-[50px] max-w-[380px] shadow-us ${param.class}`} key={index}>
                  <img src={param.src} alt={param.title} />
                  <h4 className='font-bold text-[31px] leading-[38.75px] tracking-45 mt-9 mb-[30px]'>{param.title}</h4>
                  <p className='font-[Poppins] font-normal text-secondary text-2xl tracking-45'>{param.note}</p>
               </div>
            )}
         </div>
      </section>
   );
}

export default Benfits;