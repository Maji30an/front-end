import React from "react";
import logo from "../../assets/img/logo.svg";

const Logo = (props) => {
  return(
     <div className={`flex items-center gap-2.5 ${props.class}`}>
        <img src={logo} alt='logo' />
        <h1 className='capitalize font-bold text-xl leading-6 text-white'>Digi Marketers</h1>
     </div>
  );
}

export default Logo;