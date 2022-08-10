import React from 'react';
import Button from "./current/Button";
import Logo from "./current/Logo";
import Menu from "./Menu";
import imgHeader from './../assets/img/Billy-43.svg';
import hamberger from './../assets/img/icon-menu-64.svg';

const Header = () => {
  return(
     <header className="bg-header bg-no-repeat bg-contain w-full pb-[217px] overflow-hidden">
         <div className="container mx-auto">
            <section className="flex justify-between items-center sm:pt-[4.875rem] sm:mb-[4.6875rem]">
               <img src={hamberger} alt='menu' className='sm:hidden'/>
               <Logo />
               <Menu />
            </section>
            <section className='flex relative mt-20'>
               <div className='inline-block text-white my-28'>
                  <h2 className='font-bold text-7xl leading-[5.625rem] tracking-45 max-w-[850px] mb-[25px]'>We are The Brilliants In Terms Of Digital Marketing</h2>
                  <p className='font-medium text-2xl leading-[1.875rem] tracking-45 mb-[55px]'>Book your 30-minute free strategy call</p>
                  <Button value='Book Now'/>
               </div>
               <img src={imgHeader} alt='img-header' className='absolute -top-[185px] -right-[145px]' />
            </section>
         </div>
     </header>
  );
}

export default Header;