import React from "react";
import xacton from './../assets/img/1.svg';
import twinqo from './../assets/img/2.svg';
import fresh from './../assets/img/3.svg';
import spiner from './../assets/img/4.svg';
import fugiat from './../assets/img/5.svg';

const Customers = () => {
   const params = [
      {src: xacton, title: 'Xacton', color: 'text-[#5499E8]'},
      {src: twinqo, title: 'Twinqo', color: 'text-[#D0154C]'},
      {src: fresh,  title: 'Fresh',  color: 'text-[#2F9800]'},
      {src: spiner, title: 'Spiner', color: 'text-[#CD1D65]'},
      {src: fugiat, title: 'Fugiat', color: 'text-[#A61DB4]'}
   ];
  return(
     <section className='pt-[46px] pb-[74px] rounded-[5px] shadow-[0_10px_40px_0_rgba(0,0,0,0.1)] my-[200px]'>
        <h4 className='font-bold text-center text-[28px] leading-[2.125rem]'>trusted by over <span className='text-primary'>13,041+</span> happy customers, including</h4>
        <ul className='flex justify-evenly mt-[70px]'>
           {params.map((param, index) =>
              <li className='flex items-center gap-5' key={index}>
                 <img src={param.src} alt={param.title} />
                 <span className={`${param.color} font-bold text-[32px] leading-[38px]`}>{param.title}</span>
              </li>
           )}
        </ul>
     </section>
  );
}

export default Customers;