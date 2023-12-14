import {
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo-slice',
  initialState: { tasks: [] },
  reducers: {
    addTask(state, actions) {
      let arr = { task: actions.payload, done: false };
      state.tasks.push(arr);
    },
    doTask(state, actions) {
      state.tasks.forEach((todo, index) => {
        if (index === actions.payload)
          todo.done = !todo.done;
        return state;
      });
    },
    removeTask(state, actions) {
      state.tasks = state.tasks.filter(
        (_, index) => index !== actions.payload
      );
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;
export default store;
