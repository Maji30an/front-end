import React from "react";
import sendIcon from "../assets/img/send-icon.svg";

const FormEmail = () => {
   return(
      <form className='space-y-10'>
         <h6 className='font-bold text-white text-xl leading-6'>Sign up for mounthly newsletter</h6>
         <div className='flex'>
            <input type='email' placeholder='Email Address'
                   className='rounded-l-[5px] border-0 outline-0 py-5 px-[19px]
                         placeholder:text-[#CCC] placeholder:font-poppins placeholder:font-medium
                         placeholder:text-lg placeholder:leading-[22.5px] placeholder:tracking-45' />
            <button className='bg-primary p-5 rounded-r-[5px]'><img src={sendIcon} alt='send' /></button>
         </div>
      </form>
   );
}

export default FormEmail;