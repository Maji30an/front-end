import React, {useState} from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset, incrementAmount, setInput} from "./slices/counter";
import {getIncrement,getDecrement, getIncrementAmount, getReset} from "./slices/event";

function Redux() {
   const counter = useSelector(state => state.counter);
   const event = useSelector(state => state.event);
   const dispatch = useDispatch();

   const handlerChange = e => dispatch(setInput(Number(e.target.value)));

   return(
      <div className="container mt-5">
         <div className="row">
            <div className="col-4">
               <h1 className="mb-3">Counter: {counter.count}</h1>
               <div className="d-flex justify-content-between">
                  <button type="button" onClick={() => dispatch(getIncrement())} className="btn btn-lg btn-outline-primary">increase</button>
                  <button type="button" onClick={() => dispatch(getDecrement())} className="btn btn-lg btn-outline-danger">decrease</button>
                  <button type="button" onClick={() => dispatch(getReset())} className="btn btn-lg btn-outline-secondary">reset</button>
               </div>
               <div className="input-group my-3">
                  <input type="number" className="form-control" onChange={handlerChange} />
                  <button className="btn btn-success" onClick={() => dispatch(getIncrementAmount())}>add</button>
               </div>
            </div>
            {event.show &&
               <div className="col-8">
                  <div className={`alert alert-${event.color}`} role="alert">
                     {event.message}
                  </div>
               </div>
            }
         </div>
      </div>
   );
}

export default Redux;