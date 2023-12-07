import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import atuhReducer from './auth';

// const store = createStore(counterSlice.reducers);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: atuhReducer,
  },
});


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
