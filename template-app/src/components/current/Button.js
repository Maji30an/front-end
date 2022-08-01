import React from "react";

const Button = (props) => {
  return(
     <button type='button' className={`${props.color === 'primary' ? 'text-white bg-primary' : 'text-secondary bg-white'}
     font-poppins font-medium text-2xl leading-[1.875rem] tracking-45 py-5 px-[68.35px] rounded-[5px]`}
     >{props.value}</button>
  );
}

export default Button;