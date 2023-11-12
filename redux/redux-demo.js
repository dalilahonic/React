const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
// recive two parameters: the old or existing state and action that was dispatched and returns a new state

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  //this gives us the latest state snapshot after it was updated
  console.log(latestState);
};

store.subscribe(counterSubscriber);
// subscribe method expects a function which redux will execute for us whenever the data in the store changes

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
