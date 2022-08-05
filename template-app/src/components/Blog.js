import React from "react";
import Slide from "./current/Slide";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Blog = () => {

   const pics = [
      'bg-blog-pic-1', 'bg-blog-pic-2', 'bg-blog-pic-3',
      'bg-blog-pic-1', 'bg-blog-pic-2', 'bg-blog-pic-3',
   ];
   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return `<span class="${className} inline-block mt-[50px] mx-2 bg-dot w-3 h-3 rounded-full cursor-pointer"></span>`;
      },
   };

   return(
      <section className='mt-96'>
         <div className='text-center space-y-[30px]'>
            <h2 className='text-primary font-poppins font-medium text-[28px] leading-[35px] tracking-45'>Blog</h2>
            <h3 className='font-bold text-5xl leading-[60px] tracking-45'>lastest News</h3>
            <p className='text-secondary font-normal text-2xl leading-[30px] tracking-45 max-w-[800px] mx-auto'>Senectus et scelerisque convallis at sollicitudin tellus volutpa quam. Viverra placerat morbi ut imperdiet.</p>
         </div>
         <div className='mt-20 text-center'>
            <Swiper
               modules={[Pagination]}
               spaceBetween={40}
               slidesPerView={3}
               pagination={pagination}
            >
               {pics.map((pic, i) =>
                  <SwiperSlide key={i}><Slide class={pic} /></SwiperSlide>
               )}
            </Swiper>
         </div>
      </section>
   );
}

export default Blog;