import React from "react";
import Button from "./current/Button";
import seo from './../assets/img/search-engine-optimize.svg';

const Seo = () => {
  return(
     <section className='flex justify-center items-center gap-[100px] mt-[218px] py-[115px] px-[70px] box-border shadow-my rounded-[5px]'>
        <figure className='w-1/2'>
           <img src={seo} alt='search-engine-optimize' />
        </figure>
        <div className='w-1/2'>
           <h3 className='font-bold text-5xl leading-[60px] tracking-45'>Search Engine Optimization</h3>
           <p className='font-poppins text-secondary text-2xl mt-[30px] mb-[50px]'>Sed in vel egestas ac facilisis adipiscing sit pretium tortor. Donec vivamus in magna lorem imperdiet duis bibendum condimentum.</p>
           <p className='font-poppins text-secondary text-2xl mb-[100px]'>Ultrices justo, ut eleifend sed platea. Mauris risus est nec sed tempor aenean.</p>
           <Button color='primary' value='Learn More' />
        </div>
     </section>
  );
}

export default Seo;