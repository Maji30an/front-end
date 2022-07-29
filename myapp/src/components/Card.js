import React from "react";
import Button from "./current/Button";

const Card = (props) => {
   return(
      <div className="card">
         <img src={props.image} className="card-img-top" alt='avatar' />
         <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.email}</p>
            <p className="card-text">{props.phone}</p>
            <div className="d-flex w-100 justify-content-between">
               <Button class='btn btn-warning btn-sm' value='Edit' click={props.edit}/>
               <Button class='btn btn-danger btn-sm' value='Delete' click={props.delete}/>
            </div>
         </div>
      </div>
   );
}

export default Card;