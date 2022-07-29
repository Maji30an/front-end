import React from "react";

const Button = (props) => {
   return(
      <button type={props.type} className={props.class} onClick={props.click}>{props.value}</button>
   );
}

export default Button;