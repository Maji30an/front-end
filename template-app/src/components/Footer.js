import React from "react";
import Button from "./current/Button";
import Logo from "./current/Logo";
import bgFooter from './../assets/img/bg-red-footer.svg';
import facebook from './../assets/img/facebook.svg';
import google from './../assets/img/google.svg';
import twitter from './../assets/img/twitter.svg';
import youtube from './../assets/img/youtube.svg';
import FormEmail from "./FormEmail";
import ListMenu from "./ListMenu";

const Footer = () => {
   const socials = [
      {src: facebook, title: 'facebook'},
      {src: google, title: 'google'},
      {src: twitter, title: 'twitter'},
      {src: youtube, title: 'youtube'},
   ];
   const lists = [
      {title: 'Contact', items: ['250 Northen Blvd', 'Suite 324-1033', 'Suite 324-1033', 'Albany, Ny 124-1200', '+123 456 789 00', 'Contact Us']},
      {title: 'Viewer guides', items: ['Feature', 'Careers', 'Blog Post', 'Help & Support']},
      {title: 'Community', items: ['About Us', 'Our clients', 'Legal notic']}
   ];
   return(
      <footer className='max-w-[1920px] mx-auto mt-[391px] bg-third'>
         <div className='container mx-auto'>
            <div className='text-left lg:text-center'>
               <section className='inline-block bg-white text-center py-10 px-[296.74px] rounded-[5px] shadow-my space-y-10 -translate-y-32'>
                  <h5 className='font-bold text-5xl leading-[60px] tracking-45'>Have a project in mind?</h5>
                  <Button color='primary' value='Book Now' />
               </section>
            </div>
            <div className='flex flex-wrap justify-between items-start'>
               <div className='flex flex-col gap-2 text-white w-1/4 mb-[70px]'>
                  <Logo class='-translate-y-3' />
                  <p className='font-poppins font-medium text-lg leading-[47.52px] tracking-45 mb-10'>
                     Accumsan, vel nunc, pellentesque ac in. Euismod ipsum, lectus dictum massa, mauris congue pulvinar dictum elementum. Vitae auctor non amet id sapien magna sem.
                  </p>
                  <ul className='flex gap-5'>
                     {socials.map((social, i) =>
                        <li key={i}><a href='#'><img src={social.src} alt={social.title} /></a></li>
                     )}
                  </ul>
               </div>
               <div className='flex justify-around items-start w-1/2'>
                  {lists.map((list, i) =>
                     <ListMenu key={i} title={list.title} items={list.items} />
                  )}
               </div>
               <FormEmail />
            </div>
         </div>
         <img src={bgFooter} alt='bg' />
      </footer>
   );
}

export default Footer;