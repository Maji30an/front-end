import React from "react";
import seo from './../assets/img/seo.svg';
import mail from './../assets/img/mail.svg';
import foul from './../assets/img/foul.svg';
import search from './../assets/img/search.svg';
import world from './../assets/img/world.svg';

const Services = () => {
   const items = [
      {src: seo, title: 'Seo marketing'},
      {src: mail, title: 'Email Marketing'},
      {src: foul, title: 'Growth Hacking'},
      {src: search, title: 'Google PPC'},
      {src: world, title: 'Automation Setup'},
   ];
   return(
      <section className='space-y-[90px]'>
         <div className='text-center space-y-[30px]'>
            <h2 className='text-primary font-poppins font-medium text-[28px] leading-[35px] tracking-45'>Services</h2>
            <h3 className='font-bold text-5xl leading-[60px] tracking-45'>What We Offer</h3>
            <p className='text-secondary font-normal text-2xl leading-[30px] tracking-45 max-w-[1023px] mx-auto'>Ea nam dicat utamur tincidunt, cu sea audiam vocibus. Esse nemore mei eu.
               Virtute commune dissentiet te pri, te sonet periculis mel.</p>
         </div>
         <ul className='flex flex-wrap justify-between'>
            {items.map((item, index) =>
               <li className='flex flex-col items-center w-[296px] box-border py-[2.375rem] space-y-5 border border-[#BBBBBB] rounded-[5px] relative
                  hover:border-0 hover:shadow-my hover:after:block after:hidden after:border-x-[15px] after:border-t-[30px]
                  after:border-x-transparent after:border-t-white after:absolute after:-bottom-7' key={index}>
                  <img src={item.src} alt={item.title} className='w-[80px] h-[80px]' />
                  <span className='block text-secondary font-normal text-2xl leading-[30px] tracking-45'>{item.title}</span>
               </li>
            )}
         </ul>
      </section>
   );
}

export default Services;