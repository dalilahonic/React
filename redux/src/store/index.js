import { createStore } from 'redux';
import {
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = createStore(counterSlice.reducers);
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;

export default store;

// const counterReducer = (
//   state = { counter: 0, showCounter: true },
//   action
// ) => {
//   if (action.type === 'increment')
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   else if (action.type === 'decrement')
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   else if (action.type === 'increase')
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   else if (action.type === 'toggle')
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   else return state;
// };

// const store = createStore(counterReducer);
