import React from "react";

const Input = (props) => {
   return(
      <div className="mb-3">
         <label htmlFor={props.name} className="form-label">{props.label}</label>
         <input type={props.type} className="form-control" name={props.name} value={props.value} onChange={props.change} required/>
      </div>
   );
}

export default Input;