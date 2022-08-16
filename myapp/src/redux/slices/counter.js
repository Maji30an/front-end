import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: 'counter',
   initialState: {
      count: 0,
      inputValue: 0
   },
   reducers: {
      increment(state) {
         state.count += 1;
      },
      decrement: state => {
         state.count -= 1
      },
      reset: state => {
         state.count = 0
      },
      incrementAmount(state, action) {
         state.count += action.payload;
      },
      setInput(state, action) {
         state.inputValue = action.payload;
      }
   }
})

export const { increment, decrement, reset, incrementAmount,setInput } = slice.actions;

export default slice.reducer;