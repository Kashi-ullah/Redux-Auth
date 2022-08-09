import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
// const initialCounterState = { counter: 0, showCounter: true};

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState:initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     reset(state){
//         state.counter=0;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });





const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
  }
});

export default store;