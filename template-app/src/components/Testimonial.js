import React from "react";
import eclips2 from './../assets/img/Ellipse-2.svg';
import eclips3 from './../assets/img/Ellipse-3.svg';
import eclips4 from './../assets/img/Ellipse-4.svg';
import eclips5 from './../assets/img/Ellipse-5.svg';
import eclips6 from './../assets/img/Ellipse-6.svg';
import eclips7 from './../assets/img/Ellipse-7.svg';
import eclips8 from './../assets/img/Ellipse-8.svg';

const Testimonial = () => {
   const pics = [eclips3, eclips4, eclips5, eclips6, eclips7, eclips8];
   return(
      <section className='mt-[200px]'>
         <div className='text-center space-y-[30px]'>
            <h2 className='text-primary font-poppins font-medium text-[28px] leading-[35px] tracking-45'>Testimonial</h2>
            <h3 className='font-bold text-5xl leading-[60px] tracking-45'>What Our Customers Say</h3>
            <p className='text-secondary font-normal text-2xl leading-[30px] tracking-45 max-w-[800px] mx-auto'>Senectus et scelerisque convallis at sollicitudin tellus volutpa quam. Viverra placerat morbi ut imperdiet.</p>
         </div>
         <div className='flex flex-col items-center mt-[100px]'>
            <img src={eclips2} alt='customer'/>
            <p className='font-poppins font-semibold text-secondary text-2xl leading-[38.28px] tracking-45 max-w-[1404px] text-center mt-10'>Senectus et scelerisque convallis at sollicitudin tellus volutpat quam. Ipsum bibendum iaculis gravida adipiscing porttitor purus, sodales tristique. Viverra placerat morbi ut imperdiet.</p>
            <h4 className='font-poppins font-medium text-4xl text-primary tracking-45 mt-10 mb-2.5'>Keya Akter</h4>
            <small className='text-secondary font-normal text-2xl leading-[30px] tracking-45'>Customer</small>
            <ul className='flex gap-10 mt-[100px]'>
               {pics.map((pic, i) => <li key={i}><img src={pic} alt={`customer-${i}`} /></li>)}
            </ul>
         </div>
      </section>
   );
}

export default Testimonial;