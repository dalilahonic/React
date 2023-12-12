import {
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo-slice',
  initialState: { tasks: [], done: 0 },
  reducers: {
    addTask(state, actions) {
      state.tasks.push(actions.payload);
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;
export default store;
