import React from 'react';
import Button from "./current/Button";
import Logo from "./current/Logo";
import Navigation from "./Navigation";
import imgHeader from './../assets/img/Billy-43.svg';

const Header = () => {
  return(
     <header className="bg-[url('./assets/img/bg-red.svg')] bg-no-repeat max-w-[1920px] mx-auto pb-[217px]">
         <div className='3xl:container mx-auto'>
            <section className='flex justify-between items-center pt-[4.875rem] mb-[4.6875rem]'>
               <Logo />
               <Navigation />
            </section>
            <section className='flex relative'>
               <div className='inline-block text-white my-28'>
                  <h2 className='font-bold text-7xl leading-[5.625rem] tracking-[0.045em] max-w-[850px] mb-[25px]'>We are The Brilliants In Terms Of Digital Marketing</h2>
                  <p className='font-medium text-2xl leading-[1.875rem] tracking-[0.045em] mb-[55px]'>Book your 30-minute free strategy call</p>
                  <Button />
               </div>
               <img src={imgHeader} alt='img-header' className='absolute -top-[185px] -right-[145px]' />
            </section>
         </div>
     </header>
  );
}

export default Header;