import React, {createContext, useReducer} from "react";

const initialState = {imgCurrent: '', images: [], imgOld: ''}

const handlers = {
   INITIALIZE: (state, action) => {
      const { imgCurrent, images } = action.payload;
      return {
         ...state,
         imgCurrent,
         images,
         imgOld: imgCurrent
      }
   },
   CHANGE: (state, action) => {
      const { imgCurrent, images } = action.payload;
      return {
         ...state,
         imgCurrent,
         images,
         imgOld: imgCurrent
      }
   },
}

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const ImageContext = createContext({...initialState, init:() => {}, change:() => {}});

const ImageProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const init = (imgCurrent, images) => {
      dispatch({
         type: 'INITIALIZE',
         payload: {imgCurrent, images}
      })
   }
   const change = (id) => {
      const imgCurrent = state.images[id];
      const images = state.images.map((item, i) => i === id ? state.imgOld : item);
      dispatch({
         type: 'CHANGE',
         payload: {imgCurrent , images}
      })
   }

   return(
      <ImageContext.Provider value={{...state, init, change}}>
         { children }
      </ImageContext.Provider>
   );
}

export { ImageContext, ImageProvider }