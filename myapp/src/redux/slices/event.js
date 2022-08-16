import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
   name: 'event',
   initialState: {
      message: '',
      show: false,
      color: 'info'
   },
   reducers: {
      getIncrement(state) {
         state.message = 'clicked in button increment';
         state.color = 'primary';
      },
      getDecrement(state) {
         state.message = 'clicked in button decrement';
         state.color = 'danger';
      },
      getReset(state) {
         state.message = 'clicked in button reset';
         state.color = 'secondary';
      },
      getIncrementAmount(state) {
         state.message = 'clicked in input added counter';
         state.color = 'success';
      },
      setMessage(state, action){
         state.show = action.payload;
      }
   }
})

export const { getIncrement, getDecrement, getReset, getIncrementAmount, setMessage } = slice.actions;

export default slice.reducer;