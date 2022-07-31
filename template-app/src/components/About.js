import React from "react";
import Button from "./current/Button";
import imgAbout from './../assets/img/Billy-59.svg';

const About = () => {
  return(
     <section className='flex justify-between items-center gap-[144px] mt-[200px]'>
        <figure className='w-1/2'>
           <img src={imgAbout} alt='img-about' />
        </figure>
        <div className='w-1/2'>
           <h2 className='font-[Poppins] text-primary font-medium text-[28px] leading-[35xp] tracking-45 mb-5'>About Us</h2>
           <h3 className='font-bold text-5xl leading-[60px] tracking-45'>We Are Here</h3>
           <h4 className='font-bold text-5xl leading-[60px] tracking-45'>For Business Solution Idea</h4>
           <p className='font-[Poppins] text-secondary text-2xl mt-[30px] mb-[60px] break-words'>
              Senectus et scelerisque convallis at sollicitudin tellus volutpat quam. Ipsum bibendum iaculis gravida adipiscing porttitor purus, sodales tristique. Viverra placerat morbi ut imperdiet. Ornare at sodales cras tincidunt condimentum id posuere.
           </p>
           <Button color='primary' value='Discover More' />
        </div>
     </section>
  );
}

export default About;